const mockPromotionsData = [
    {   id: 'p1', 
        name: 'Leite Integral (1L)', 
        price: 4.25, 
        unit: 'unidade' 
    },

    {   id: 'p2', 
        name: 'Arroz Tipo 1 (5kg)', 
        price: 18.99, 
        unit: 'pacote' 
    },

    {   id: 'p3', 
        name: 'Café Torrado e Moído (500g)', 
        price: 12.50, 
        unit: 'pacote' 
    },

    {   id: 'p4', 
        name: 'Óleo de Soja (900ml)', 
        price: 6.99, 
        unit: 'unidade' 
    },
];

const PromotionModal = ({ market, onClose }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        
        <h2>Promoções Ativas: {market.name}</h2>
        <p style={{ color: '#6c757d' }}>Última atualização: 10/10/2025</p>

        <div className="promotions-list">
            {mockPromotionsData.map((promo) => (
                <div key={promo.id} className="promotion-item">
                    <div className="promo-info">
                        <strong>{promo.name}</strong>
                        <small>({promo.unit})</small>
                    </div>
                    <div className="promo-price-box">
                        <span className="promo-price">R$ {promo.price.toFixed(2)}</span>
                    </div>
                </div>
            ))}
        </div>
        
        <p style={{ marginTop: '20px', textAlign: 'center' }}>Total de {mockPromotionsData.length} itens em promoção.</p>
      </div>
    </>
  );
};

export default PromotionModal;
