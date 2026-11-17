import React from 'react';
import { MAP_MARKERS, MapMarker } from '../../data/areas';

interface AreaMapSvgProps {
  activeTown?: string | null;
  onSelectTown?: (townName: string) => void;
}

export function AreaMapSvg({ activeTown, onSelectTown }: AreaMapSvgProps) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#151412',
        border: '1px solid rgba(242, 238, 230, 0.16)',
        borderRadius: '4px',
        padding: 'clamp(0.75rem, 2vw, 1.5rem)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem 1rem',
          marginBottom: '0.75rem',
        }}
      >
        <span className="font-mono-label" style={{ color: '#E0763A' }}>
          Corridor Schematic · I-20 &amp; Logan Martin Lake
        </span>
        <span className="font-mono-label" style={{ color: '#B3AEA5' }}>
          Hub: Pell City, AL
        </span>
      </div>

      <svg
        viewBox="0 0 960 400"
        role="img"
        aria-label="Service area schematic from Birmingham through Pell City and Logan Martin Lake to Oxford along Interstate 20"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        {/* Subtle topo grid */}
        <g stroke="rgba(242, 238, 230, 0.06)" strokeWidth="1">
          <line x1="0" y1="100" x2="960" y2="100" />
          <line x1="0" y1="200" x2="960" y2="200" />
          <line x1="0" y1="300" x2="960" y2="300" />
          <line x1="240" y1="0" x2="240" y2="400" />
          <line x1="480" y1="0" x2="480" y2="400" />
          <line x1="720" y1="0" x2="720" y2="400" />
        </g>

        {/* Stylized Logan Martin Lake / Coosa River water band */}
        <path
          d="M498 40 C512 95, 488 135, 514 176 C536 212, 522 248, 494 278 C474 298, 492 342, 466 378"
          fill="none"
          stroke="rgba(139, 174, 194, 0.25)"
          strokeWidth="28"
          strokeLinecap="round"
        />
        <path
          d="M498 40 C512 95, 488 135, 514 176 C536 212, 522 248, 494 278 C474 298, 492 342, 466 378"
          fill="none"
          stroke="rgba(165, 200, 220, 0.48)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <text
          x="530"
          y="296"
          fill="rgba(165, 200, 220, 0.85)"
          fontFamily="Martian Mono, monospace"
          fontSize="11"
          letterSpacing="1.5"
        >
          LOGAN MARTIN LAKE
        </text>

        {/* Service corridor halo */}
        <path
          d="M60 198 Q 270 168 470 178 T 875 152"
          fill="none"
          stroke="rgba(196, 86, 27, 0.16)"
          strokeWidth="54"
          strokeLinecap="round"
        />

        {/* I-20 Corridor Line */}
        <path
          d="M60 198 Q 270 168 470 178 T 875 152"
          fill="none"
          stroke="#C4561B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <rect x="664" y="158" width="46" height="22" rx="2" fill="#0E0E0D" stroke="#C4561B" strokeWidth="1.5" />
        <text
          x="687"
          y="173"
          textAnchor="middle"
          fill="#F2EEE6"
          fontFamily="Martian Mono, monospace"
          fontSize="11"
          fontWeight="600"
        >
          I-20
        </text>

        {/* Town Markers */}
        {MAP_MARKERS.map((marker: MapMarker) => {
          const isHub = marker.role === 'hub';
          const isActive = activeTown === marker.name;
          const dx = marker.labelOffset?.dx ?? 0;
          const dy = marker.labelOffset?.dy ?? -14;

          return (
            <g
              key={marker.id}
              transform={`translate(${marker.x}, ${marker.y})`}
              style={{ cursor: onSelectTown ? 'pointer' : 'default' }}
              onClick={() => onSelectTown?.(marker.name)}
              role={onSelectTown ? 'button' : undefined}
              tabIndex={onSelectTown ? 0 : undefined}
              onKeyDown={(e) => {
                if (onSelectTown && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  onSelectTown(marker.name);
                }
              }}
              aria-label={marker.name}
            >
              {isHub && (
                <circle r="20" fill="rgba(196, 86, 27, 0.25)" stroke="#E0763A" strokeWidth="1.5" />
              )}
              <circle
                r={isHub ? 8 : isActive ? 7 : 5}
                fill={isHub || isActive ? '#C4561B' : '#F2EEE6'}
                stroke="#0E0E0D"
                strokeWidth="2"
              />
              <text
                x={dx}
                y={dy}
                textAnchor={dx > 6 ? 'start' : dx < -6 ? 'end' : 'middle'}
                fill={isHub || isActive ? '#F2EEE6' : 'rgba(242, 238, 230, 0.85)'}
                fontFamily={isHub ? 'Bricolage Grotesque, sans-serif' : 'Schibsted Grotesk, sans-serif'}
                fontSize={isHub ? '15' : '12.5'}
                fontWeight={isHub || isActive ? '700' : '500'}
              >
                {marker.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
