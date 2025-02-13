document.addEventListener('DOMContentLoaded', () => {
    const chatChamada = document.getElementById('chat-call');
    const chatBubble = document.querySelector('.chat-bubble');
    const profileContainer = document.querySelector('.profile-container');

    // Configuração de Leads e Mensagens
    let leadCaptureConfig = {
        initialMessage: {
            text: "Economize até 50% na Gestão do seu RH!",
            subtext: "Soluções completas de Ponto e RH"
        },
        messages: [
            {
                text: "🕒 Relógio de Ponto Facial",
                image: "https://s3.typebot.io/public/workspaces/cm1phfshl003t3eii8w05yvqa/typebots/cm1phgys1002qgddxxp63z6vg/blocks/lve22ond1ko0mqzdchmr7jeq/items/xk8tog98fo13brqaxkbz6p01?v=1731941959466",
                urgency: "Só restam 5 unidades em promoção!",
                price: {
                    original: "R$ 2.988,00",
                    promo: "R$ 2.490,00",
                    discount: "20%",
                    installment: "4x de R$ 622,50 no boleto"
                },
                ctaText: "Receba uma Proposta Agora",
                testLink: "https://typebot.co/lead-magnet-3a9mx2z"
            },
            {
                text: "📱 Aplicativo de Marcação de Ponto",
                image: "https://s3.typebot.io/public/workspaces/cm1phfshl003t3eii8w05yvqa/typebots/cm1phgys1002qgddxxp63z6vg/blocks/lve22ond1ko0mqzdchmr7jeq/items/xt0hxhb07vte3r642fro6zwl?v=1731955466124",
                urgency: "Vagas limitadas para teste gratuito!",
                price: {
                    original: "A partir de R$ 68,00",
                    promo: "Primeiro mês grátis",
                    discount: "100%",
                    installment: "Planos flexíveis"
                },
                ctaText: "Testar Grátis",
                testLink: "https://typebot.co/lead-magnet-3a9mx2z"
            },
            {
                text: "🔍 Relógio de Ponto Biométrico",
                image: "https://s3.typebot.io/public/workspaces/cm1phfshl003t3eii8w05yvqa/typebots/cm1phgys1002qgddxxp63z6vg/blocks/lve22ond1ko0mqzdchmr7jeq/items/jddg53ir5plm6mw7tbzly11l?v=1731942469311",
                urgency: "Promoção por tempo limitado - Desconto Especial!",
                price: {
                    original: "R$ 1.890,00",
                    promo: "R$ 1.550,00",
                    discount: "18%",
                    installment: "4x de R$ 387,50 no boleto"
                },
                ctaText: "Receba uma Proposta Formalizada",
                testLink: "https://typebot.co/lead-magnet-3a9mx2z"
            },
            {
                text: "🔍 Software de Ponto",
                image: "https://s3.typebot.io/public/workspaces/cm1phfshl003t3eii8w05yvqa/typebots/cm1phgys1002qgddxxp63z6vg/blocks/lve22ond1ko0mqzdchmr7jeq/items/xt0hxhb07vte3r642fro6zwl?v=1731955466124",
                urgency: "Transforme sua gestão de ponto!",
                price: {
                    original: "A partir de R$ 68,00",
                    promo: "Primeiro mês grátis",
                    discount: "100%",
                    installment: "Planos empresariais"
                },
                ctaText: "Testar Grátis",
                testLink: "https://typebot.co/lead-magnet-3a9mx2z"
            }
        ],
        urgencyTexts: [
            "Última chance!",
            "Não perca essa oportunidade!",
            "Oferta termina em breve!",
            "Quantidade limitada!"
        ]
    };

    // Função para gerar mensagem inicial
    function generateInitialMessage() {
        return `
            <span class="chat-close-btn">&times;</span>
            <div class="lead-capture-message initial-message">
                <h3>${leadCaptureConfig.initialMessage.text}</h3>
                <p>${leadCaptureConfig.initialMessage.subtext}</p>
                <div class="cta-button">Saiba Mais</div>
            </div>
        `;
    }

    // Função para gerar mensagem dinâmica
    function generateDynamicMessage() {
        const randomMessage = leadCaptureConfig.messages[
            Math.floor(Math.random() * leadCaptureConfig.messages.length)
        ];

        return `
            <span class="chat-close-btn">&times;</span>
            <div class="lead-capture-message dynamic-message">
                <div class="product-image-container">
                    <img src="${randomMessage.image}" alt="${randomMessage.text}" class="product-image">
                </div>
                <h3>${randomMessage.text}</h3>
                <div class="urgency-badge">${randomMessage.urgency}</div>
                <div class="price-container">
                    <div class="price-original">De: ${randomMessage.price.original}</div>
                    <div class="price-promo">Por: ${randomMessage.price.promo}</div>
                    <div class="price-discount">Desconto: ${randomMessage.price.discount}</div>
                    <div class="price-installment">${randomMessage.price.installment}</div>
                </div>
                <p class="sub-message">Clique e Saiba Mais!</p>
                <div class="cta-button test-button">${randomMessage.ctaText}</div>
                <div class="view-counter">0 pessoas visualizaram</div>
            </div>
        `;
    }

    // Função para recarregar a configuração
    function reloadLeadCaptureConfig(newConfig) {
        leadCaptureConfig = { ...leadCaptureConfig, ...newConfig };
        
        // Reiniciar chat com nova configuração
        if (chatBubble.querySelector('.dynamic-message')) {
            chatBubble.innerHTML = generateDynamicMessage();
            setupCloseButton();
            setupCTAButtons();
        }
    }

    // Expor função globalmente para permitir recarregamento
    window.reloadLeadCaptureConfig = reloadLeadCaptureConfig;

    // Inicializar chat
    function initializeChat() {
        chatBubble.innerHTML = generateInitialMessage();
        setupCloseButton();
        setupCTAButtons();
        startMessageRotation();
    }

    // Configurar botão de fechar
    function setupCloseButton() {
        const closeBtn = chatBubble.querySelector('.chat-close-btn');
        closeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            chatBubble.style.display = 'none';
        });
    }

    // Configurar botões de chamada à ação
    function setupCTAButtons() {
        const ctaButtons = chatBubble.querySelectorAll('.cta-button');
        ctaButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                
                // Se for o botão de teste, abrir link específico
                if (button.classList.contains('test-button')) {
                    const currentMessage = leadCaptureConfig.messages.find(
                        msg => msg.text.includes(chatBubble.querySelector('h3').textContent)
                    );
                    
                    if (currentMessage) {
                        window.open(currentMessage.testLink, '_blank');
                    }
                } else {
                    // Transição para mensagem dinâmica
                    chatBubble.innerHTML = generateDynamicMessage();
                    setupCloseButton();
                    setupCTAButtons();
                    startMessageRotation();
                }
            });
        });
    }

    // Iniciar rotação de mensagens
    function startMessageRotation() {
        // Contagem de Visualizações (Social Proof)
        let viewCount = parseInt(localStorage.getItem('viewCount') || '0');
        
        // Função para atualizar o contador de visualizações
        function updateViewCounter() {
            viewCount++;
            localStorage.setItem('viewCount', viewCount.toString());
            
            const viewCountElement = chatBubble.querySelector('.view-counter');
            if (viewCountElement) {
                viewCountElement.textContent = `${viewCount} pessoas visualizaram`;
            }
        }

        // Trocar mensagens a cada 10 segundos
        const messageInterval = setInterval(() => {
            // Gerar nova mensagem
            chatBubble.innerHTML = generateDynamicMessage();
            
            // Atualizar contador de visualizações
            updateViewCounter();

            setupCloseButton();
            setupCTAButtons();
        }, 10000); // 10 segundos

        // Atualizar contador na primeira inicialização
        updateViewCounter();

        // Limpar intervalo quando o documento for fechado
        document.addEventListener('beforeunload', () => {
            clearInterval(messageInterval);
        });

        // Adicionar contador ao clicar no avatar
        chatChamada.addEventListener('click', updateViewCounter);
    }

    // Adicionar animações de atenção
    function addAttentionTriggers() {
        // Animação de Pulse no Avatar
        profileContainer.classList.add('pulse-animation');

        // Efeito de Hover Dinâmico
        chatChamada.addEventListener('mouseenter', () => {
            chatBubble.classList.add('hover-grow');
            profileContainer.classList.add('avatar-highlight');
        });

        chatChamada.addEventListener('mouseleave', () => {
            chatBubble.classList.remove('hover-grow');
            profileContainer.classList.remove('avatar-highlight');
        });
    }

    // Evento de clique no avatar para abrir chat
    chatChamada.addEventListener('click', (event) => {
        event.stopPropagation();
        chatBubble.style.display = 'block';
        
        // Se já estiver com mensagem dinâmica, não reiniciar
        if (!chatBubble.querySelector('.initial-message')) {
            initializeChat();
        }
        
        // Adicionar animações de atenção
        addAttentionTriggers();
    });

    // Inicialização
    initializeChat();
});
