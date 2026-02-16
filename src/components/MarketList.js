import { mockMarkets } from '../data/mockData'; 
import '../styles/global.css'

function MarketList({ onOpenPromotions }) {
  <button
    className="details-button"
    onClick={() => onOpenPromotions(market.id)}
  >
    Ver Promoções
  </button>;
  return (
    <div className="market-list-container">
      <h3>Mercados ({mockMarkets.length} encontrados)</h3>
      <div className="market-items-scroll">
        {mockMarkets.map((market) => (
          // Adicione uma estilização bacana aqui para cada item
          <div key={market.id} className="market-item">
            <h4>{market.name}</h4>
            <p>
              <span style={{ fontWeight: 'bold' }}>📍 {market.address}</span>
            </p>
            <p style={{ fontSize: '0.9em', color: '#666' }}>
              ⭐ {market.rating.toFixed(1)} | {market.promotionsCount} Promoções
            </p>
            <button className="details-button">Ver Promoções</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketList;