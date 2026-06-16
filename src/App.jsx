import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Tooltip, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'

// Default marker icon fix for many bundlers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Sample data — replace with your own list of cities and PDFs
// Each city: { id, name, lat, lng, pdfs: [{id, title, url}] }
const SAMPLE_CITIES = [
  {
    id: 'paris',
    name: 'Paris',
    lat: 48.8566,
    lng: 2.3522,
    pdfs: [
      { id: 'p1', title: 'Testimony — ADHAM SAMIR', url: '/pdfs/adham1.pdf' },
      { id: 'p2', title: 'Testimony — CHEHAB', url: '/pdfs/adham.pdf' },
      { id: 'p3', title: 'Testimony — DR NOUR', url: '/pdfs/PAIEMENT.pdf' },
      { id: 'p4', title: 'Testimony — HAWARAA', url: '/pdfs/HAWARAA.pdf' },
      { id: 'p4', title: 'Testimony — adham el gammal', url: '/pdfs/gammal.pdf' }
    ],
  },
  {
    id: 'lyon',
    name: 'Lyon',
    lat: 45.7640,
    lng: 4.8357,
    pdfs: [
      { id: 'l1', title: 'Testimony — Sophie', url: '/pdfs/lyon-sophie.pdf' },
    ],
  },
  {
    id: 'marseille',
    name: 'Marseille',
    lat: 43.2965,
    lng: 5.3698,
    pdfs: [
      { id: 'm1', title: 'Testimony — Ahmed', url: '/pdfs/marseille-ahmed.pdf' },
    ],
  },
  {
    id: 'toulouse',
    name: 'Toulouse',
    lat: 43.6048,
    lng: 1.4428,
    pdfs: [
      { id: 't1', title: 'Testimony — Jean', url: '/pdfs/toulouse-jean.pdf' },
    ],
  },
  {
    id: 'strasbourg',
    name: 'Strasbourg',
    lat: 48.5734,
    lng: 7.7521,
    pdfs: [
      { id: 's1', title: 'Testimony — seif', url: '/pdfs/seif.pdf' },
    ],
  },
  {
    id: 'nice',
    name: 'Nice',
    lat: 43.7102,
    lng: 7.2620,
    pdfs: [
      { id: 'm1', title: 'Testimony — yasmine', url: '/pdfs/yasmine.pdf' },
    ],
  },
]



export default function FranceMapApp({ cities = SAMPLE_CITIES }) {
  const [selectedCity, setSelectedCity] = useState(null)
  const [viewerPdf, setViewerPdf] = useState(null)

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <div className="map-container">
        <MapContainer 
          center={[46.6, 2.4]} 
          zoom={5} 
          scrollWheelZoom={true} 
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {cities.map((c) => (
            <Marker
              key={c.id}
              position={[c.lat, c.lng]}
              eventHandlers={{
                click: () => setSelectedCity(c),
                mouseover: (e) => {
                  e.target.openPopup();
                }
              }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                {c.name}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <aside className="sidebar-container">
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>City details</h2>
        {selectedCity ? (
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '500' }}>{selectedCity.name}</h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>PDF testimonies available: {selectedCity.pdfs.length}</p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {selectedCity.pdfs.map((pdf) => (
                <li key={pdf.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #e5e7eb', borderRadius: '0.25rem', padding: '0.5rem' }}>
                  <div style={{ fontSize: '0.875rem' }}>{pdf.title}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: '0.875rem', textDecoration: 'underline' }}
                    >
                      Open
                    </a>
                    <button
                      onClick={() => setViewerPdf(pdf)}
                      style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', border: '1px solid #e5e7eb', borderRadius: '0.25rem', cursor: 'pointer' }}
                    >
                      Preview
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedCity(null)}
              style={{ marginTop: '1rem', display: 'inline-block', padding: '0.25rem 0.75rem', fontSize: '0.875rem', border: '1px solid #e5e7eb', borderRadius: '0.25rem', cursor: 'pointer' }}
            >
              Close
            </button>
          </div>
        ) : (
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Click a city on the map to see PDFs for that city.</p>
        )}

        <div style={{ marginTop: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem' }}>Search cities</h3>
          <CitySearch cities={cities} onChoose={(c) => setSelectedCity(c)} />
        </div>
      </aside>

      {/* PDF preview modal */}
      {viewerPdf && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-4xl h-[80vh] rounded shadow-lg overflow-hidden">
            <div className="flex items-center justify-between p-2 border-b">
              <div className="font-medium">{viewerPdf.title}</div>
              <div className="flex gap-2">
                <a href={viewerPdf.url} target="_blank" rel="noreferrer" className="px-3 py-1 border rounded text-sm">Open in new tab</a>
                <button onClick={() => setViewerPdf(null)} className="px-3 py-1 border rounded text-sm">Close</button>
              </div>
            </div>

            <iframe src={viewerPdf.url} title={viewerPdf.title} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  )
}

function CitySearch({ cities, onChoose }) {
  const [q, setQ] = useState('')
  const filtered = q.trim() === '' 
    ? cities.slice(0, 5) // Show first 5 cities by default 
    : cities.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()))

  return (
    <div style={{ marginTop: '0.5rem' }}>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Start typing a city name..."
        style={{ 
          width: '100%', 
          border: '1px solid #e5e7eb', 
          borderRadius: '0.25rem', 
          padding: '0.75rem', 
          color: 'black',
          fontWeight: '500',
          display: 'block'
        }}
      />

      <ul style={{ 
        marginTop: '0.5rem', 
        maxHeight: '15rem', 
        overflowY: 'auto', 
        border: '1px solid #e5e7eb', 
        borderRadius: '0.25rem', 
        backgroundColor: 'white' 
      }}>
        {filtered.map((c) => (
          <li 
            key={c.id} 
            style={{ 
              padding: '0.75rem', 
              cursor: 'pointer', 
              textAlign: 'left', 
              borderBottom: '1px solid #f3f4f6'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
            onClick={() => onChoose(c)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

/*
README / Integration notes

How to use
1) Create a React app (Vite or CRA). This component is a single-file app suitable for embedding in a page.
2) Install dependencies:
   npm install react-leaflet leaflet

3) Put your PDFs in the public folder (e.g. public/pdfs/paris-jean-dupont.pdf) or host them on a CDN/S3.
4) Replace SAMPLE_CITIES with your real data source. For large numbers of cities, load from a JSON/GeoJSON endpoint and use marker clustering (e.g. react-leaflet-markercluster).
5) If you need user uploads, create a small API that stores PDFs and returns their public URLs (S3 + presigned URLs recommended).

Accessibility & performance tips
- Lazy load PDF previews on demand (this app opens PDFs in an iframe only when requested).
- For hundreds or thousands of cities, use clustering and server-side paging.
- Add alt text and keyboard navigation for accessibility.

Possible enhancements
- Use Mapbox or Google Maps for nicer tiles and better performance; you'll need an API key.
- Add server-side search endpoint to handle many cities.
- Add roles/permissions if testimonies are sensitive.
*/
