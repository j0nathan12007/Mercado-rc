/* =========================
   MERCADO RC
========================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       PRODUTOS
    ========================= */

    const produtos = [

        {
            id: 1,
            jogo: "Free Fire",
            nome: "5.600 Diamantes",
            icone: "💎",
            preco: 129.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao:
                "Pacote de diamantes para utilizar na compra de itens e recursos dentro do Free Fire."
        },

        {
            id: 2,
            jogo: "Free Fire",
            nome: "Passe Premium",
            icone: "🔥",
            preco: 39.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao:
                "Passe Premium para desbloquear recompensas e conteúdos especiais dentro do jogo."
        },

        {
            id: 3,
            jogo: "GTA V",
            nome: "Shark Cash Card",
            icone: "🦈",
            preco: 59.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao:
                "Saldo para utilizar no GTA Online e adquirir veículos, propriedades e outros itens."
        },

        {
            id: 4,
            jogo: "GTA V",
            nome: "GTA V Mídia Física",
            icone: "🎮",
            preco: 119.90,
            tipo: "fisico",
            data: "01/10/2026",
            descricao:
                "Cópia física de GTA V. O produto será enviado para o endereço informado no cadastro."
        },

        {
            id: 5,
            jogo: "Fortnite",
            nome: "1.000 V-Bucks",
            icone: "🪙",
            preco: 34.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao:
                "1.000 V-Bucks para adquirir itens cosméticos, passes e outros conteúdos no Fortnite."
        },

        {
            id: 6,
            jogo: "Fortnite",
            nome: "Skin Neon",
            icone: "⚡",
            preco: 49.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao:
                "Skin temática Neon para personalizar seu personagem no Fortnite."
        },

        {
            id: 7,
            jogo: "Steam",
            nome: "Gift Card R$50",
            icone: "🎁",
            preco: 50.00,
            tipo: "digital",
            data: "01/10/2026",
            descricao:
                "Gift Card Steam de R$50 para adicionar saldo à sua carteira Steam."
        },

        {
            id: 8,
            jogo: "Steam",
            nome: "Gift Card R$100",
            icone: "💳",
            preco: 100.00,
            tipo: "digital",
            data: "01/10/2026",
            descricao:
                "Gift Card Steam de R$100 para utilizar na compra de jogos e conteúdos."
        },

        {
            id: 9,
            jogo: "Free Fire",
            nome: "1.060 Diamantes",
            icone: "💠",
            preco: 29.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao: "Pacote compacto de diamantes para compras dentro do Free Fire."
        },
        {
            id: 10,
            jogo: "Free Fire",
            nome: "Passe Booyah",
            icone: "🏆",
            preco: 24.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao: "Passe especial com recompensas e itens temáticos para o Free Fire."
        },
        {
            id: 11,
            jogo: "GTA V",
            nome: "Shark Cash Card R$100",
            icone: "🦈",
            preco: 99.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao: "Crédito demonstrativo para utilização no GTA Online."
        },
        {
            id: 12,
            jogo: "GTA V",
            nome: "GTA V Mídia Física Premium",
            icone: "💿",
            preco: 149.90,
            tipo: "fisico",
            data: "01/10/2026",
            descricao: "Edição física premium de GTA V para entrega no endereço cadastrado."
        },
        {
            id: 13,
            jogo: "Fortnite",
            nome: "2.800 V-Bucks",
            icone: "🪙",
            preco: 79.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao: "Pacote de V-Bucks para itens, passes e conteúdos do Fortnite."
        },
        {
            id: 14,
            jogo: "Fortnite",
            nome: "Pacote Neon",
            icone: "🌌",
            preco: 89.90,
            tipo: "digital",
            data: "01/10/2026",
            descricao: "Pacote cosmético temático Neon para personalizar sua experiência."
        },
        {
            id: 15,
            jogo: "Steam",
            nome: "Gift Card R$25",
            icone: "🎟️",
            preco: 25.00,
            tipo: "digital",
            data: "01/10/2026",
            descricao: "Gift Card Steam de R$25 para adicionar saldo à carteira."
        },
        {
            id: 16,
            jogo: "Steam",
            nome: "Gift Card R$200",
            icone: "💰",
            preco: 200.00,
            tipo: "digital",
            data: "01/10/2026",
            descricao: "Gift Card Steam de R$200 para jogos e conteúdos digitais."
        }

    ];


    /* =========================
       VARIÁVEIS
    ========================= */

    let carrinho =
        JSON.parse(
            localStorage.getItem("mercadoRC_carrinho")
        ) || [];

    let usuarioAtual =
        JSON.parse(
            localStorage.getItem("mercadoRC_usuarioAtual")
        ) || null;

    let notificationTimer = null;

    /* ESTOQUE E PEDIDOS */
    const estoquePadrao = {};
    produtos.forEach(function (produto) {
        estoquePadrao[produto.id] = 20;
    });

    let estoque = JSON.parse(
        localStorage.getItem("mercadoRC_estoque")
    ) || estoquePadrao;

    Object.keys(estoquePadrao).forEach(function (id) {
        if (typeof estoque[id] !== "number") estoque[id] = estoquePadrao[id];
    });

    let pedidos = JSON.parse(
        localStorage.getItem("mercadoRC_pedidos")
    ) || [];

    const linksOficiaisPadrao = {
        discord: "https://discord.gg/hd5xweQFP",
        instagram: "",
        facebook: "",
        site: ""
    };

    let linksOficiais = Object.assign(
        {},
        linksOficiaisPadrao,
        JSON.parse(localStorage.getItem("mercadoRC_linksOficiais")) || {}
    );

    let atendimentos = JSON.parse(
        localStorage.getItem("mercadoRC_atendimentos")
    ) || [];

    let atendimentoAdminSelecionado = null;

    const ADMIN_PASSWORD = "RC@Admin2026";
    const ADMIN_ROLES_PASSWORD = "RC@Cargos2026";

    const cargosPadrao = [
        { id: 1, nome: "Dono", descricao: "Acesso máximo às configurações administrativas.", cor: "#ffb84d" },
        { id: 2, nome: "Gerente", descricao: "Gerencia operações, pedidos e equipe.", cor: "#b86cff" },
        { id: 3, nome: "Administrador", descricao: "Administra usuários, estoque e suporte.", cor: "#4fc3ff" },
        { id: 4, nome: "Suporte", descricao: "Atende compradores e acompanha chamados.", cor: "#00ed9a" },
        { id: 5, nome: "Moderador", descricao: "Auxilia na organização e atendimento da comunidade.", cor: "#ff5f91" }
    ];

    let cargosSite = JSON.parse(localStorage.getItem("mercadoRC_cargos")) || cargosPadrao;
    let cargosAutorizados = false;
    let atendimentoAdminExclusaoPendente = null;
    let ordemProdutos = "default";
    let favoritos = JSON.parse(localStorage.getItem("mercadoRC_favoritos")) || [];
    let cupomAtual = JSON.parse(localStorage.getItem("mercadoRC_cupomAtual")) || null;
    let adminAtual = JSON.parse(localStorage.getItem("mercadoRC_adminAtual")) || null;
    let notificacoes = JSON.parse(localStorage.getItem("mercadoRC_notificacoes")) || [];

    const nivelCargo = {
        "Moderador": 1,
        "Suporte": 2,
        "Administrador": 3,
        "Gerente": 4,
        "Dono": 5
    };

    function nivelDoAdmin() {
        if (!adminAtual) return 0;
        if (nivelCargo[adminAtual.cargo]) return nivelCargo[adminAtual.cargo];
        return cargosSite.some(function (cargo) { return cargo.nome === adminAtual.cargo; }) ? 1 : 0;
    }

    function podeGerenciar() {
        return nivelDoAdmin() >= 4;
    }

    function podeConfirmarCompra() {
        return nivelDoAdmin() >= 1;
    }

    function salvarNotificacoes() {
        localStorage.setItem("mercadoRC_notificacoes", JSON.stringify(notificacoes));
    }

    function adicionarNotificacao(email, titulo, mensagem, tipo) {
        if (!email) return;
        notificacoes.unshift({
            id: "NT" + Date.now() + Math.random().toString(16).slice(2),
            email: email,
            titulo: titulo,
            mensagem: mensagem,
            tipo: tipo || "info",
            lida: false,
            data: new Date().toISOString()
        });
        notificacoes = notificacoes.slice(0, 80);
        salvarNotificacoes();
        atualizarSinoNotificacoes();
    }

    function atualizarSinoNotificacoes() {
        const badge = document.getElementById("notificationCount");
        if (!badge) return;
        const total = usuarioAtual ? notificacoes.filter(function (n) { return n.email === usuarioAtual.email && !n.lida; }).length : 0;
        badge.textContent = total > 99 ? "99+" : String(total);
        badge.classList.toggle("has-notifications", total > 0);
    }

    function mostrarNotificacoes() {
        if (!usuarioAtual) {
            mostrarLogin();
            return;
        }
        const minhas = notificacoes.filter(function (n) { return n.email === usuarioAtual.email; }).sort(function (a, b) {
            return new Date(b.data) - new Date(a.data);
        });
        minhas.forEach(function (n) { n.lida = true; });
        salvarNotificacoes();
        atualizarSinoNotificacoes();
        abrirModal(`
            <div class="notification-center">
                <span class="eyebrow">CENTRAL RC</span>
                <h2 class="modal-title">Notificações</h2>
                <p class="modal-description">Acompanhe atualizações de pedidos, suporte e conta.</p><button id="markAllNotifications" class="profile-action" type="button">✓ Marcar todas como lidas</button>
                <div class="notification-list">
                    ${minhas.length ? minhas.map(function (n) {
                        return `<article class="notification-item ${escaparHTML(n.tipo || "info")}"><div class="notification-item-icon">${n.tipo === "sucesso" ? "✓" : n.tipo === "suporte" ? "💬" : "●"}</div><div><strong>${escaparHTML(n.titulo)}</strong><p>${escaparHTML(n.mensagem)}</p><small>${dataAtendimento(n.data)}</small></div></article>`;
                    }).join("") : `<div class="support-empty" style="min-height:160px"><div><strong>Nenhuma notificação</strong>Quando houver uma atualização, ela aparecerá aqui.</div></div>`}
                </div>
            </div>
        `);
        const markAll = document.getElementById("markAllNotifications");
        if (markAll) markAll.addEventListener("click", function(){ minhas.forEach(function(n){n.lida=true;}); salvarNotificacoes(); atualizarSinoNotificacoes(); mostrarNotificacoes(); });
    }


    /* =========================
       ELEMENTOS
    ========================= */

    const productsContainer =
        document.getElementById("products");

    const cartButton =
        document.getElementById("cartButton");

    const cartPanel =
        document.getElementById("cartPanel");

    const closeCart =
        document.getElementById("closeCart");

    const overlay =
        document.getElementById("overlay");

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    const loginButton =
        document.getElementById("loginButton");

    const notificationBell =
        document.getElementById("notificationBell");

    const modal =
        document.getElementById("modal");

    const modalBody =
        document.getElementById("modalBody");

    const closeModal =
        document.getElementById("closeModal");

    const checkoutButton =
        document.getElementById("checkoutButton");

    const exploreButton =
        document.getElementById("exploreButton");

    const offersButton =
        document.getElementById("offersButton");

    const closeNotification =
        document.getElementById("closeNotification");


    /* =========================
       FORMATAÇÃO
    ========================= */

    function dinheiro(valor) {

        return valor.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );

    }


    /* =========================
       SALVAR CARRINHO
    ========================= */

    function salvarCarrinho() {

        localStorage.setItem(
            "mercadoRC_carrinho",
            JSON.stringify(carrinho)
        );

    }


    /* =========================
       NOTIFICAÇÃO
    ========================= */

    function mostrarNotificacao(
        titulo,
        mensagem
    ) {

        const notification =
            document.getElementById(
                "notification"
            );

        const title =
            document.getElementById(
                "notificationTitle"
            );

        const message =
            document.getElementById(
                "notificationMessage"
            );

        if (
            !notification ||
            !title ||
            !message
        ) {
            return;
        }

        title.textContent = titulo;

        message.textContent = mensagem;

        notification.classList.add("show");

        clearTimeout(
            notificationTimer
        );

        notificationTimer =
            setTimeout(
                function () {

                    notification.classList.remove(
                        "show"
                    );

                },
                4000
            );

    }


    function fecharNotificacao() {

        const notification =
            document.getElementById(
                "notification"
            );

        if (notification) {

            notification.classList.remove(
                "show"
            );

        }

    }


    function salvarFavoritos() {
        localStorage.setItem("mercadoRC_favoritos", JSON.stringify(favoritos));
    }

    function toggleFavorito(id) {
        id = Number(id);
        if (favoritos.includes(id)) favoritos = favoritos.filter(function (item) { return item !== id; });
        else favoritos.push(id);
        salvarFavoritos();
        renderizarProdutos(document.querySelector(".filter.active") ? document.querySelector(".filter.active").dataset.game : "Todos");
        mostrarNotificacao(favoritos.includes(id) ? "Favorito salvo" : "Favorito removido", favoritos.includes(id) ? "Produto adicionado aos seus favoritos." : "Produto removido dos favoritos.");
    }

    function mostrarFavoritos() {
        if (!usuarioAtual) { mostrarLogin(); return; }
        const lista = produtos.filter(function (produto) { return favoritos.includes(produto.id); });
        abrirModal(`
            <div class="favorite-center">
                <span class="eyebrow">CONTA RC</span><h2 class="modal-title">Meus favoritos</h2>
                <p class="modal-description">Produtos guardados para você comprar depois.</p>
                <div class="favorite-list">${lista.length ? lista.map(function(p){return `<article class="favorite-item"><span class="favorite-icon">${p.icone}</span><div><strong>${escaparHTML(p.nome)}</strong><small>${escaparHTML(p.jogo)} • ${dinheiro(p.preco)}</small></div><button class="primary favorite-buy" data-favorite-buy="${p.id}" type="button">Comprar</button><button class="remove-payment favorite-remove" data-favorite-remove="${p.id}" type="button">×</button></article>`;}).join("") : `<div class="payment-empty">Você ainda não salvou produtos.</div>`}</div>
            </div>`);
        document.querySelectorAll("[data-favorite-buy]").forEach(function(btn){btn.addEventListener("click",function(){adicionarCarrinho(Number(btn.dataset.favoriteBuy));});});
        document.querySelectorAll("[data-favorite-remove]").forEach(function(btn){btn.addEventListener("click",function(){toggleFavorito(Number(btn.dataset.favoriteRemove)); mostrarFavoritos();});});
    }

    function mostrarProduto(id) {
        const produto = produtos.find(function(item){return item.id === Number(id);});
        if (!produto) return;
        const favorito = favoritos.includes(produto.id);
        abrirModal(`<div class="product-detail-modal"><div class="product-detail-art">${produto.icone}<span>${escaparHTML(produto.jogo)}</span></div><div class="product-detail-content"><span class="eyebrow">${escaparHTML(produto.tipo === "fisico" ? "PRODUTO FÍSICO" : "PRODUTO DIGITAL")}</span><h2 class="modal-title">${escaparHTML(produto.nome)}</h2><p class="modal-description">${escaparHTML(produto.descricao)}</p><div class="product-detail-meta"><div><small>Preço</small><strong>${dinheiro(produto.preco)}</strong></div><div><small>Estoque</small><strong>${estoque[produto.id] || 0}</strong></div><div><small>Atualizado</small><strong>${escaparHTML(produto.data || "01/10/2026")}</strong></div></div><div class="product-detail-actions"><button id="detailAdd" class="primary" type="button">🛒 Adicionar ao carrinho</button><button id="detailFavorite" class="profile-action" type="button">${favorito ? "♥ Remover favorito" : "♡ Adicionar favorito"}</button></div></div></div>`);
        document.getElementById("detailAdd").addEventListener("click",function(){adicionarCarrinho(produto.id);});
        document.getElementById("detailFavorite").addEventListener("click",function(){toggleFavorito(produto.id); fecharModal(); mostrarProduto(produto.id);});
    }

    /* =========================
       RENDERIZAR PRODUTOS
    ========================= */

    function renderizarProdutos(
        filtro = "Todos"
    ) {

        if (!productsContainer) {
            return;
        }

        let lista =
            filtro === "Todos"
                ? [...produtos]
                : produtos.filter(
                    function (produto) {
                        return produto.jogo === filtro;
                    }
                );

        if (ordemProdutos === "price-low") {
            lista.sort(function (a, b) { return a.preco - b.preco; });
        } else if (ordemProdutos === "price-high") {
            lista.sort(function (a, b) { return b.preco - a.preco; });
        }

        productsContainer.innerHTML = "";

        lista.forEach(
            function (produto) {

                const card =
                    document.createElement(
                        "article"
                    );

                card.className =
                    "product";

                card.innerHTML = `

                    <div class="product-image">
                        ${produto.icone}
                    </div>

                    <div class="product-body">

                        <span class="product-game">
                            ${produto.jogo}
                        </span>

                        <h3>
                            ${produto.nome}
                        </h3>

                        <p>
                            ${
                                produto.tipo === "fisico"
                                    ? "Mídia física"
                                    : "Produto digital"
                            }
                        </p>

                        <div class="product-extra">

                            <p>
                                ${
                                    produto.descricao ||
                                    "Produto selecionado especialmente para jogadores."
                                }
                            </p>

                            <div class="product-info">

                                <span>
                                    Atualizado:
                                    ${produto.data || "01/10/2026"}
                                </span>

                                <strong>
                                    ${dinheiro(produto.preco)}
                                </strong>

                            </div>

                        </div>

                        <span class="stock-label ${estoque[produto.id] <= 0 ? "out" : estoque[produto.id] <= 5 ? "low" : ""}">
                            ${estoque[produto.id] <= 0 ? "Sem estoque" : "Estoque: " + estoque[produto.id]}
                        </span>

                        <div class="product-card-actions">
                            <button class="favorite-button ${favoritos.includes(produto.id) ? "active" : ""}" data-favorite-id="${produto.id}" type="button" title="Favorito">${favoritos.includes(produto.id) ? "♥" : "♡"}</button>
                            <button class="detail-button" data-detail-id="${produto.id}" type="button">Ver detalhes</button>
                        </div>

                        <div class="product-bottom">

                            <span class="product-price">
                                ${dinheiro(produto.preco)}
                            </span>

                            <button
                                class="add-button"
                                data-id="${produto.id}"
                                ${estoque[produto.id] <= 0 ? "disabled" : ""}
                            >
                                ${estoque[produto.id] <= 0 ? "Indisponível" : "Adicionar"}
                            </button>

                        </div>

                    </div>
                `;

                productsContainer.appendChild(
                    card
                );

            }
        );

        const addButtons =
            document.querySelectorAll(
                ".add-button"
            );

        addButtons.forEach(
            function (button) {
                button.addEventListener("click", function () { adicionarCarrinho(Number(button.dataset.id)); });
            }
        );
        document.querySelectorAll("[data-detail-id]").forEach(function(button){
            button.addEventListener("click", function(event){ event.stopPropagation(); mostrarProduto(button.dataset.detailId); });
        });
        document.querySelectorAll("[data-favorite-id]").forEach(function(button){
            button.addEventListener("click", function(event){ event.stopPropagation(); toggleFavorito(button.dataset.favoriteId); });
        });
        document.querySelectorAll(".product").forEach(function(card){
            card.addEventListener("dblclick", function(){ const btn=card.querySelector("[data-detail-id]"); if(btn) mostrarProduto(btn.dataset.detailId); });
        });

    }


    /* =========================
       ADICIONAR CARRINHO
    ========================= */

    function adicionarCarrinho(id) {

        const produto =
            produtos.find(
                function (item) {
                    return item.id === id;
                }
            );

        if (!produto) {
            return;
        }

        if ((estoque[produto.id] || 0) <= 0) {
            mostrarNotificacao("Sem estoque", "Este produto está temporariamente indisponível.");
            return;
        }

        carrinho.push(produto);

        salvarCarrinho();

        atualizarCarrinho();

        mostrarNotificacao(
            "Produto adicionado",
            produto.nome +
            " foi adicionado ao seu carrinho."
        );

        abrirCarrinho();

    }


    /* =========================
       ATUALIZAR CARRINHO
    ========================= */

    function atualizarCarrinho() {

        if (!cartItems) {
            return;
        }

        cartItems.innerHTML = "";

        if (carrinho.length === 0) {

            cartItems.innerHTML = `
                <p style="
                    color:#888;
                    padding:25px 0;
                ">
                    Seu carrinho está vazio.
                </p>
            `;

        }

        carrinho.forEach(
            function (produto, index) {

                const item =
                    document.createElement(
                        "div"
                    );

                item.className =
                    "cart-item";

                item.innerHTML = `

                    <div class="cart-item-info">

                        <strong>
                            ${produto.icone}
                            ${produto.nome}
                        </strong>

                        <br>

                        <small>
                            ${produto.jogo}
                        </small>

                        <br>

                        <small>
                            ${dinheiro(produto.preco)}
                        </small>

                    </div>

                    <button
                        class="remove-item"
                        data-index="${index}"
                    >
                        Remover
                    </button>

                `;

                cartItems.appendChild(item);

            }
        );

        const removeButtons =
            document.querySelectorAll(
                ".remove-item"
            );

        removeButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        removerCarrinho(index);

                    }
                );

            }
        );

        const sidePreview = document.getElementById("sideCartPreview");
        const sideCount = document.getElementById("sideCartCount");
        const sideTotal = document.getElementById("sideCartTotal");

        if (sidePreview) {
            if (carrinho.length === 0) {
                sidePreview.innerHTML = '<p>Seu carrinho está vazio.</p>';
            } else {
                sidePreview.innerHTML = carrinho.slice(0, 3).map(function (produto) {
                    return '<div class="side-cart-item"><i>' + produto.icone + '</i><span><b>' + produto.nome + '</b><small>' + dinheiro(produto.preco) + '</small></span></div>';
                }).join("") + (carrinho.length > 3 ? '<p>+' + (carrinho.length - 3) + ' item(ns) no carrinho.</p>' : '');
            }
        }

        if (sideCount) sideCount.textContent = carrinho.length + (carrinho.length === 1 ? " item" : " itens");

        if (sideTotal) {
            const sideValue = carrinho.reduce(function (soma, produto) { return soma + produto.preco; }, 0);
            sideTotal.textContent = dinheiro(sideValue);
        }

        if (cartCount) {
            cartCount.textContent = carrinho.length;
        }

        const total =
            carrinho.reduce(
                function (soma, produto) {
                    return soma + produto.preco;
                },
                0
            );

        if (cartTotal) {

            cartTotal.textContent =
                dinheiro(total);

        }

    }


    /* =========================
       REMOVER CARRINHO
    ========================= */

    function removerCarrinho(index) {

        const produto =
            carrinho[index];

        if (!produto) {
            return;
        }

        carrinho.splice(
            index,
            1
        );

        salvarCarrinho();

        atualizarCarrinho();

        mostrarNotificacao(
            "Produto removido",
            produto.nome +
            " foi removido do carrinho."
        );

    }


    /* =========================
       ABRIR CARRINHO
    ========================= */

    function abrirCarrinho() {

        if (cartPanel) {
            cartPanel.classList.add("open");
        }

        if (overlay) {
            overlay.classList.remove("hidden");
        }

    }


    /* =========================
       FECHAR CARRINHO
    ========================= */

    function fecharCarrinho() {

        if (cartPanel) {
            cartPanel.classList.remove("open");
        }

        if (overlay) {
            overlay.classList.add("hidden");
        }

    }


    /* =========================
       MODAL
    ========================= */

    function abrirModal(conteudo) {

        if (!modal || !modalBody) {
            return;
        }

        modalBody.innerHTML =
            conteudo;

        modal.classList.remove("hidden");
        modal.classList.add("show");

    }


    function fecharModal() {

        if (modal) {

            modal.classList.remove("show");
            modal.classList.add("hidden");

        }

    }


    /* =========================
       LOGIN
    ========================= */

    function mostrarLogin() {

        abrirModal(`

            <h2 class="modal-title">
                Entrar no Mercado RC
            </h2>

            <p class="modal-description">
                Acesse sua conta para continuar.
            </p>

            <form
                id="loginForm"
                class="form"
            >

                <input
                    type="email"
                    id="loginEmail"
                    placeholder="Seu e-mail"
                    required
                >

                <input
                    type="password"
                    id="loginPassword"
                    placeholder="Sua senha"
                    required
                >

                <button type="submit">
                    Entrar
                </button>

            </form>

            <div style="
                margin-top:18px;
                display:flex;
                justify-content:space-between;
                gap:10px;
                flex-wrap:wrap;
            ">

                <button
                    id="registerLink"
                    style="
                        background:none;
                        border:none;
                        color:#c36cff;
                    "
                >
                    Criar conta
                </button>

                <button
                    id="forgotLink"
                    style="
                        background:none;
                        border:none;
                        color:#999;
                    "
                >
                    Esqueci minha senha
                </button>

            </div>

        `);


        const loginForm =
            document.getElementById(
                "loginForm"
            );

        if (loginForm) {

            loginForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    const email =
                        document.getElementById(
                            "loginEmail"
                        ).value.trim();

                    const senha =
                        document.getElementById(
                            "loginPassword"
                        ).value;

                    const usuarios =
                        JSON.parse(
                            localStorage.getItem(
                                "mercadoRC_usuarios"
                            )
                        ) || [];

                    const usuario =
                        usuarios.find(
                            function (item) {

                                return (
                                    item.email === email &&
                                    item.senha === senha
                                );

                            }
                        );

                    if (!usuario) {

                        mostrarNotificacao(
                            "Login inválido",
                            "E-mail ou senha incorretos."
                        );

                        return;
                    }

                    usuarioAtual =
                        usuario;

                    localStorage.setItem(
                        "mercadoRC_usuarioAtual",
                        JSON.stringify(
                            usuarioAtual
                        )
                    );

                    fecharModal();

                    atualizarBotaoLogin();

                    mostrarNotificacao(
                        "Login realizado",
                        "Bem-vindo ao Mercado RC, " +
                        usuario.nome +
                        "!"
                    );

                }
            );

        }


        const registerLink =
            document.getElementById(
                "registerLink"
            );

        if (registerLink) {

            registerLink.addEventListener(
                "click",
                mostrarCadastro
            );

        }


        const forgotLink =
            document.getElementById(
                "forgotLink"
            );

        if (forgotLink) {

            forgotLink.addEventListener(
                "click",
                mostrarRecuperacao
            );

        }

    }


    /* =========================
       CADASTRO
    ========================= */

    function mostrarCadastro() {

        abrirModal(`

            <h2 class="modal-title">
                Criar conta
            </h2>

            <p class="modal-description">
                Crie sua conta Mercado RC.
            </p>

            <form
                id="registerForm"
                class="form"
            >

                <input
                    type="text"
                    id="registerName"
                    placeholder="Nome completo"
                    required
                >

                <input
                    type="email"
                    id="registerEmail"
                    placeholder="E-mail"
                    required
                >

                <input
                    type="password"
                    id="registerPassword"
                    placeholder="Senha"
                    minlength="6"
                    required
                >

                <input
                    type="text"
                    id="registerCep"
                    placeholder="CEP"
                    required
                >

                <input
                    type="text"
                    id="registerAddress"
                    placeholder="Endereço"
                    required
                >

                <input
                    type="text"
                    id="registerCity"
                    placeholder="Cidade"
                    required
                >

                <input
                    type="text"
                    id="registerState"
                    placeholder="Estado"
                    required
                >

                <button type="submit">
                    Criar conta
                </button>

            </form>

        `);


        const form =
            document.getElementById(
                "registerForm"
            );

        if (!form) {
            return;
        }

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const usuarios =
                    JSON.parse(
                        localStorage.getItem(
                            "mercadoRC_usuarios"
                        )
                    ) || [];

                const email =
                    document.getElementById(
                        "registerEmail"
                    ).value.trim();

                const emailExiste =
                    usuarios.some(
                        function (usuario) {
                            return usuario.email === email;
                        }
                    );

                if (emailExiste) {

                    mostrarNotificacao(
                        "E-mail já cadastrado",
                        "Utilize outro e-mail ou faça login."
                    );

                    return;
                }

                const usuario = {

                    nome:
                        document.getElementById(
                            "registerName"
                        ).value.trim(),

                    email: email,

                    senha:
                        document.getElementById(
                            "registerPassword"
                        ).value,

                    cep:
                        document.getElementById(
                            "registerCep"
                        ).value.trim(),

                    endereco:
                        document.getElementById(
                            "registerAddress"
                        ).value.trim(),

                    cidade:
                        document.getElementById(
                            "registerCity"
                        ).value.trim(),

                    estado:
                        document.getElementById(
                            "registerState"
                        ).value.trim(),

                    cargo: "",

                    pagamentos: {
                        cartao: null,
                        pix: null
                    }

                };

                usuarios.push(usuario);

                localStorage.setItem(
                    "mercadoRC_usuarios",
                    JSON.stringify(usuarios)
                );

                usuarioAtual =
                    usuario;

                localStorage.setItem(
                    "mercadoRC_usuarioAtual",
                    JSON.stringify(usuarioAtual)
                );

                fecharModal();

                atualizarBotaoLogin();

                mostrarNotificacao(
                    "Conta criada",
                    "Sua conta Mercado RC foi criada com sucesso."
                );

            }
        );

    }


    /* =========================
       RECUPERAÇÃO DE SENHA
    ========================= */

    function mostrarRecuperacao() {

        abrirModal(`

            <h2 class="modal-title">
                Recuperar senha
            </h2>

            <p class="modal-description">
                Informe seu e-mail para localizar sua conta.
            </p>

            <form
                id="recoveryForm"
                class="form"
            >

                <input
                    type="email"
                    id="recoveryEmail"
                    placeholder="Seu e-mail"
                    required
                >

                <button type="submit">
                    Continuar
                </button>

            </form>

        `);


        const form =
            document.getElementById(
                "recoveryForm"
            );

        if (!form) {
            return;
        }

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    document.getElementById(
                        "recoveryEmail"
                    ).value.trim();

                const usuarios =
                    JSON.parse(
                        localStorage.getItem(
                            "mercadoRC_usuarios"
                        )
                    ) || [];

                const usuario =
                    usuarios.find(
                        function (item) {
                            return item.email === email;
                        }
                    );

                if (!usuario) {

                    mostrarNotificacao(
                        "Conta não encontrada",
                        "Não encontramos uma conta com esse e-mail."
                    );

                    return;
                }

                mostrarNotificacao(
                    "Conta encontrada",
                    "A recuperação de senha está disponível nesta demonstração."
                );

                fecharModal();

            }
        );

    }


    /* =========================
       PERFIL
    ========================= */

    function mostrarPerfil() {

        if (!usuarioAtual) {
            mostrarLogin();
            return;
        }

        const meusPedidos = pedidos.filter(function (pedido) {
            return pedido.email === usuarioAtual.email;
        });

        const meusAtendimentos = atendimentos.filter(function (item) {
            return item.email === usuarioAtual.email;
        });

        const pagamentos = usuarioAtual.pagamentos || {};
        const iniciais = (usuarioAtual.nome || "RC")
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(function (parte) { return parte.charAt(0).toUpperCase(); })
            .join("");

        abrirModal(`
            <div class="profile-shell">
                <div class="profile-hero-card">
                    <div class="profile-avatar">${escaparHTML(iniciais || "RC")}</div>
                    <div class="profile-hero-info">
                        <span class="eyebrow">CONTA MERCADO RC</span>
                        <h2>${escaparHTML(usuarioAtual.nome || "Jogador")}</h2>
                        <p>${escaparHTML(usuarioAtual.email || "")}</p>
                        <div class="profile-status"><span></span> Conta ativa</div>
                    </div>
                    <div class="profile-hero-glow"></div>
                </div>

                <div class="profile-stats">
                    <div><span>🛒</span><b>${meusPedidos.length}</b><small>Pedidos</small></div>
                    <div><span>💬</span><b>${meusAtendimentos.length}</b><small>Atendimentos</small></div>
                    <div><span>🔔</span><b>${notificacoes.filter(function (n) { return n.email === usuarioAtual.email && !n.lida; }).length}</b><small>Alertas</small></div>
                </div>

                <div class="profile-section-head">
                    <div><span class="eyebrow">SEUS DADOS</span><h3>Informações da conta</h3></div>
                    <span class="profile-secure">🔒 Privado</span>
                </div>

                <div class="profile-info-grid">
                    <div class="profile-info-card"><span>👤 Nome completo</span><strong>${escaparHTML(usuarioAtual.nome || "Não informado")}</strong></div>
                    <div class="profile-info-card"><span>✉️ E-mail</span><strong>${escaparHTML(usuarioAtual.email || "Não informado")}</strong></div>
                    <div class="profile-info-card"><span>📮 CEP</span><strong>${escaparHTML(usuarioAtual.cep || "Não informado")}</strong></div>
                    <div class="profile-info-card"><span>🏠 Endereço</span><strong>${escaparHTML(usuarioAtual.endereco || "Não informado")}</strong></div>
                    <div class="profile-info-card"><span>🌆 Cidade</span><strong>${escaparHTML(usuarioAtual.cidade || "Não informado")}</strong></div>
                    <div class="profile-info-card"><span>🇧🇷 Estado</span><strong>${escaparHTML(usuarioAtual.estado || "Não informado")}</strong></div>
                </div>

                <div class="profile-section-head">
                    <div><span class="eyebrow">PAGAMENTO</span><h3>Formas salvas</h3></div>
                    <span class="profile-hint">Checkout mais rápido</span>
                </div>

                <div class="saved-payments">
                    ${pagamentos.cartao ? `<div class="saved-payment-card"><span>💳</span><div><strong>Cartão •••• ${escaparHTML(pagamentos.cartao.final)}</strong><small>${escaparHTML(pagamentos.cartao.titular || "Cartão salvo")} ${pagamentos.cartao.validade ? "• " + escaparHTML(pagamentos.cartao.validade) : ""}</small></div><button class="remove-payment" data-remove-payment="cartao" type="button">Remover</button></div>` : ""}
                    ${pagamentos.pix ? `<div class="saved-payment-card"><span>▣</span><div><strong>PIX salvo</strong><small>${escaparHTML(pagamentos.pix.chave)}</small></div><button class="remove-payment" data-remove-payment="pix" type="button">Remover</button></div>` : ""}
                    ${!pagamentos.cartao && !pagamentos.pix ? `<div class="payment-empty">Nenhuma forma salva. Adicione PIX ou cartão para agilizar suas próximas compras.</div>` : ""}
                </div>

                <div class="profile-payment-actions">
                    <button id="addCardPayment" class="profile-action" type="button">💳 Adicionar cartão</button>
                    <button id="addPixPayment" class="profile-action" type="button">▣ Adicionar PIX</button>
                </div>

                <div class="profile-section-head connected-head">
                    <div><span class="eyebrow">PLATAFORMAS</span><h3>Contas conectadas</h3></div>
                    <span class="profile-hint">Integrações oficiais</span>
                </div>
                <p class="profile-note">As plataformas abaixo ficam vinculadas ao seu perfil. A conexão real depende de uma integração oficial com cada serviço.</p>

                <div class="connected-accounts profile-connected-grid">
                    ${contaConectada("🎸", "Rockstar Games")}
                    ${contaConectada("🔥", "Garena")}
                    ${contaConectada("◈", "Steam")}
                    ${contaConectada("⚡", "Epic Games")}
                    ${contaConectada("🎯", "PlayStation Network")}
                </div>

                <div class="profile-actions">
                    <button id="profileSupportButton" class="profile-action primary-action" type="button">💬 Meus atendimentos</button>
                    <button id="profileOrdersButton" class="profile-action" type="button">🛒 Histórico de compras</button>
                    <button id="profileNotificationButton" class="profile-action" type="button">🔔 Notificações</button>
                    <button id="logoutButton" class="profile-action danger-action" type="button">↪ Sair da conta</button>
                </div>

                <div class="profile-footer-note">Mercado RC • Seus dados e sua experiência, em um só lugar.</div>
            </div>
        `);

        const profileSupportButton = document.getElementById("profileSupportButton");
        if (profileSupportButton) profileSupportButton.addEventListener("click", mostrarMeusAtendimentos);

        const profileOrdersButton = document.getElementById("profileOrdersButton");
        if (profileOrdersButton) profileOrdersButton.addEventListener("click", mostrarHistoricoPedidos);

        const profileNotificationButton = document.getElementById("profileNotificationButton");
        if (profileNotificationButton) profileNotificationButton.addEventListener("click", mostrarNotificacoes);

        const logoutButton = document.getElementById("logoutButton");
        if (logoutButton) {
            logoutButton.addEventListener("click", function () {
                usuarioAtual = null;
                localStorage.removeItem("mercadoRC_usuarioAtual");
                fecharModal();
                atualizarBotaoLogin();
                atualizarSinoNotificacoes();
                mostrarNotificacao("Sessão encerrada", "Você saiu da sua conta.");
            });
        }

        document.querySelectorAll(".remove-payment").forEach(function (button) {
            button.addEventListener("click", function () {
                const tipo = button.dataset.removePayment;
                usuarioAtual.pagamentos = usuarioAtual.pagamentos || {};
                delete usuarioAtual.pagamentos[tipo];
                salvarUsuarioAtual();
                mostrarPerfil();
                mostrarNotificacao("Forma removida", "A forma de pagamento salva foi removida.");
            });
        });

        const addCard = document.getElementById("addCardPayment");
        if (addCard) addCard.addEventListener("click", adicionarCartaoSalvo);

        const addPix = document.getElementById("addPixPayment");
        if (addPix) addPix.addEventListener("click", adicionarPixSalvo);

        document.querySelectorAll(".connect-button").forEach(function (button) {
            button.addEventListener("click", function () {
                const plataforma = button.dataset.platform;
                mostrarNotificacao("Integração", "A conexão real com " + plataforma + " será adicionada quando a API oficial for configurada.");
            });
        });
    }

    function salvarUsuarioAtual() {
        if (!usuarioAtual) return;
        localStorage.setItem("mercadoRC_usuarioAtual", JSON.stringify(usuarioAtual));
        const usuarios = JSON.parse(localStorage.getItem("mercadoRC_usuarios")) || [];
        const index = usuarios.findIndex(function (u) { return u.email === usuarioAtual.email; });
        if (index >= 0) {
            usuarios[index] = Object.assign({}, usuarios[index], usuarioAtual);
            localStorage.setItem("mercadoRC_usuarios", JSON.stringify(usuarios));
        }
    }

    function adicionarCartaoSalvo() {
        abrirModal(`
            <div class="payment-save-box">
                <span class="eyebrow">PAGAMENTO SALVO</span>
                <h2 class="modal-title">Adicionar cartão</h2>
                <p class="modal-description">Modo demonstrativo: o site guarda apenas os 4 últimos dígitos, titular e validade. Não armazena o número completo nem CVV.</p>
                <form id="saveCardForm" class="form">
                    <input id="savedCardNumber" inputmode="numeric" maxlength="19" placeholder="Número do cartão" required>
                    <input id="savedCardHolder" maxlength="60" placeholder="Nome no cartão" required>
                    <input id="savedCardExpiry" maxlength="7" placeholder="Validade MM/AA" required>
                    <input id="savedCardNickname" maxlength="25" placeholder="Apelido (ex.: Cartão principal)">
                    <button class="primary full" type="submit">Salvar cartão</button>
                </form>
            </div>
        `);
        document.getElementById("saveCardForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const numero = document.getElementById("savedCardNumber").value.replace(/\D/g, "");
            const validade = document.getElementById("savedCardExpiry").value.trim();
            if (numero.length < 12) {
                mostrarNotificacao("Cartão inválido", "Digite um número de cartão de teste válido.");
                return;
            }
            usuarioAtual.pagamentos = usuarioAtual.pagamentos || {};
            usuarioAtual.pagamentos.cartao = {
                final: numero.slice(-4),
                titular: document.getElementById("savedCardHolder").value.trim(),
                validade: validade,
                apelido: document.getElementById("savedCardNickname").value.trim()
            };
            salvarUsuarioAtual();
            mostrarPerfil();
            mostrarNotificacao("Cartão salvo", "O cartão ficou disponível para as próximas compras.");
        });
    }

    function adicionarPixSalvo() {
        abrirModal(`
            <div class="payment-save-box">
                <span class="eyebrow">PAGAMENTO SALVO</span>
                <h2 class="modal-title">Adicionar PIX</h2>
                <p class="modal-description">Cadastre sua chave PIX para não precisar informar novamente nas próximas compras.</p>
                <form id="savePixForm" class="form">
                    <input id="savedPixKey" maxlength="120" placeholder="Chave PIX" required>
                    <input id="savedPixLabel" maxlength="30" placeholder="Apelido (ex.: PIX principal)">
                    <button class="primary full" type="submit">Salvar PIX</button>
                </form>
            </div>
        `);
        document.getElementById("savePixForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const chave = document.getElementById("savedPixKey").value.trim();
            if (!chave) return;
            usuarioAtual.pagamentos = usuarioAtual.pagamentos || {};
            usuarioAtual.pagamentos.pix = {
                chave: chave,
                apelido: document.getElementById("savedPixLabel").value.trim()
            };
            salvarUsuarioAtual();
            mostrarPerfil();
            mostrarNotificacao("PIX salvo", "Sua chave PIX ficou disponível para o checkout.");
        });
    }

    function mostrarHistoricoPedidos() {
        if (!usuarioAtual) { mostrarLogin(); return; }
        const meusPedidos = pedidos.filter(function (pedido) { return pedido.email === usuarioAtual.email; }).sort(function (a, b) { return new Date(b.data) - new Date(a.data); });
        abrirModal(`<div class="purchase-history"><span class="eyebrow">CONTA RC</span><h2 class="modal-title">Meus pedidos</h2><p class="modal-description">Acompanhe pedidos, status, pagamento e comprovantes.</p><div class="history-list">${meusPedidos.length ? meusPedidos.map(function(pedido){ const confirmado=pedido.status==="Confirmado"; return `<article class="history-card"><div class="history-head"><div><strong>#${escaparHTML(pedido.id)}</strong><small>${formatarDataPedido(pedido.data)}</small></div><span class="order-status ${confirmado?"confirmed":""}">${escaparHTML(pedido.status||"Pendente")}</span></div><div class="history-progress"><span class="${pedido.status?"done":""}">Pedido</span><span class="${confirmado?"done":""}">Pagamento</span><span>Entrega</span></div><div class="history-items">${pedido.itens.map(function(item){return `<span>${escaparHTML(item.nome)} × ${item.quantidade}</span>`;}).join("")}</div><div class="history-total"><span>${escaparHTML(pedido.pagamentoSalvo || pedido.pagamento || "Pagamento")}</span><strong>${dinheiro(pedido.total)}</strong></div><div class="history-actions"><button class="profile-action" data-receipt="${escaparHTML(pedido.id)}" type="button">📄 Comprovante</button><button class="profile-action" data-reorder="${escaparHTML(pedido.id)}" type="button">🛒 Comprar novamente</button></div></article>`;}).join("") : `<div class="payment-empty">Você ainda não realizou compras.</div>`}</div></div>`);
        document.querySelectorAll("[data-receipt]").forEach(function(btn){btn.addEventListener("click",function(){mostrarComprovante(btn.dataset.receipt);});});
        document.querySelectorAll("[data-reorder]").forEach(function(btn){btn.addEventListener("click",function(){const pedido=pedidos.find(function(p){return p.id===btn.dataset.reorder;}); if(!pedido)return; pedido.itens.forEach(function(item){for(let i=0;i<item.quantidade;i++) carrinho.push(produtos.find(function(p){return p.id===item.id;})||Object.assign({},item));}); salvarCarrinho(); atualizarCarrinho(); fecharModal(); abrirCarrinho(); mostrarNotificacao("Itens adicionados","Os produtos do pedido foram adicionados ao carrinho.");});});
    }

    function mostrarComprovante(id) {
        const pedido = pedidos.find(function(item){return item.id===id && usuarioAtual && item.email===usuarioAtual.email;});
        if (!pedido) return;
        abrirModal(`<div class="receipt"><span class="eyebrow">MERCADO RC • COMPROVANTE</span><h2 class="modal-title">Compra #${escaparHTML(pedido.id)}</h2><div class="receipt-status">${escaparHTML(pedido.status||"Pendente")}</div><div class="receipt-grid"><div><small>Cliente</small><strong>${escaparHTML(pedido.cliente)}</strong></div><div><small>Data</small><strong>${formatarDataPedido(pedido.data)}</strong></div><div><small>Pagamento</small><strong>${escaparHTML(pedido.pagamentoSalvo||pedido.pagamento)}</strong></div><div><small>Total</small><strong>${dinheiro(pedido.total)}</strong></div></div><div class="receipt-items">${pedido.itens.map(function(i){return `<div><span>${escaparHTML(i.nome)} × ${i.quantidade}</span><b>${dinheiro(i.preco*i.quantidade)}</b></div>`;}).join("")}</div><button id="receiptPrint" class="primary full" type="button">🖨️ Imprimir / salvar PDF</button></div>`);
        document.getElementById("receiptPrint").addEventListener("click",function(){window.print();});
    }


    function contaConectada(
        icone,
        nome
    ) {

        return `

            <div class="connected-account">

                <div class="connected-account-info">

                    <span>
                        ${icone}
                    </span>

                    <strong>
                        ${nome}
                    </strong>

                </div>

                <button
                    class="connect-button"
                    data-platform="${nome}"
                >
                    Conectar
                </button>

            </div>

        `;

    }


    /* =========================
       BOTÃO LOGIN
    ========================= */

    function atualizarBotaoLogin() {

        if (!loginButton) {
            return;
        }

        if (usuarioAtual) {

            loginButton.textContent =
                "Minha conta";

        } else {

            loginButton.textContent =
                "Entrar";

        }

    }



    /* =========================
       LINKS OFICIAIS
    ========================= */

    function salvarLinksOficiais() {
        localStorage.setItem("mercadoRC_linksOficiais", JSON.stringify(linksOficiais));
    }

    function linkSeguro(url) {
        const valor = String(url || "").trim();
        if (!valor) return "";
        try {
            const parsed = new URL(valor);
            return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
        } catch (erro) {
            return "";
        }
    }

    function renderLinksOficiais() {
        const alvo = document.getElementById("officialLinks");
        const rodape = document.getElementById("footerOfficialLinks");
        const itens = [
            { chave: "discord", nome: "Discord", icone: "◈" },
            { chave: "instagram", nome: "Instagram", icone: "◎" },
            { chave: "facebook", nome: "Facebook", icone: "f" },
            { chave: "site", nome: "Site oficial", icone: "⌂" }
        ];

        if (alvo) {
            alvo.innerHTML = itens.map(function (item) {
                const url = linkSeguro(linksOficiais[item.chave]);
                return url
                    ? `<a class="official-link" href="${escaparHTML(url)}" target="_blank" rel="noopener noreferrer"><i>${item.icone}</i><span>${item.nome}</span><b>↗</b></a>`
                    : `<span class="official-link disabled"><i>${item.icone}</i><span>${item.nome}</span><small>Em breve</small></span>`;
            }).join("");
        }

        if (rodape) {
            rodape.innerHTML = itens.filter(function (item) { return linkSeguro(linksOficiais[item.chave]); }).map(function (item) {
                const url = linkSeguro(linksOficiais[item.chave]);
                return `<a href="${escaparHTML(url)}" target="_blank" rel="noopener noreferrer">${item.nome}</a>`;
            }).join("");
        }
    }

    function renderAdminLinks() {
        const painel = document.getElementById("admin-links");
        if (!painel) return;
        painel.innerHTML = `
            <div class="admin-settings-card">
                <div class="admin-settings-head">
                    <div><span class="eyebrow">PRESENÇA OFICIAL</span><h3>Links oficiais do Mercado RC</h3><p>Altere os destinos que aparecem para os compradores no site.</p></div>
                    <span class="admin-badge">LINKS</span>
                </div>
                <form id="officialLinksForm" class="admin-links-form">
                    <label><span>◈ Discord</span><input id="adminDiscordLink" type="url" placeholder="https://discord.gg/..." value="${escaparHTML(linksOficiais.discord || "")}"></label>
                    <label><span>◎ Instagram</span><input id="adminInstagramLink" type="url" placeholder="https://instagram.com/..." value="${escaparHTML(linksOficiais.instagram || "")}"></label>
                    <label><span>f Facebook</span><input id="adminFacebookLink" type="url" placeholder="https://facebook.com/..." value="${escaparHTML(linksOficiais.facebook || "")}"></label>
                    <label><span>⌂ Site oficial</span><input id="adminSiteLink" type="url" placeholder="https://seusite.com" value="${escaparHTML(linksOficiais.site || "")}"></label>
                    <button class="primary full" type="submit">💾 Salvar links oficiais</button>
                </form>
                <div class="admin-warning">Use somente links oficiais iniciados por <b>http://</b> ou <b>https://</b>. Os compradores serão direcionados para o endereço salvo.</div>
            </div>`;

        document.getElementById("officialLinksForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const valores = {
                discord: document.getElementById("adminDiscordLink").value.trim(),
                instagram: document.getElementById("adminInstagramLink").value.trim(),
                facebook: document.getElementById("adminFacebookLink").value.trim(),
                site: document.getElementById("adminSiteLink").value.trim()
            };
            for (const chave of Object.keys(valores)) {
                if (valores[chave] && !linkSeguro(valores[chave])) {
                    mostrarNotificacao("Link inválido", "O campo " + chave + " precisa usar http:// ou https://.");
                    return;
                }
            }
            linksOficiais = valores;
            salvarLinksOficiais();
            renderLinksOficiais();
            mostrarNotificacao("Links atualizados", "Os destinos oficiais do site foram salvos.");
        });
    }

    /* =========================
       SUPORTE • ATENDIMENTO POR CHAT
    ========================= */

    function salvarAtendimentos() {
        localStorage.setItem("mercadoRC_atendimentos", JSON.stringify(atendimentos));
    }

    function escaparHTML(texto) {
        return String(texto == null ? "" : texto)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function dataAtendimento(data) {
        return new Date(data).toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function abrirSuporteNovo() {
        if (!usuarioAtual) {
            mostrarNotificacao("Login necessário", "Entre na sua conta para abrir um atendimento.");
            mostrarLogin();
            return;
        }

        abrirModal(`
            <div class="support-chat-window support-new-window">
                <div class="support-chat-head">
                    <div>
                        <strong>💬 Novo atendimento</strong>
                        <small>Atendimento exclusivo por chat com a equipe Mercado RC.</small>
                    </div>
                    <span class="admin-badge">CHAT</span>
                </div>
                <form id="supportNewForm" class="form" style="padding:15px">
                    <input id="supportSubject" type="text" maxlength="80" placeholder="Assunto do atendimento" required>
                    <textarea id="supportFirstMessage" maxlength="1200" placeholder="Descreva o que aconteceu ou sua dúvida..." required style="min-height:130px;resize:vertical;background:#090f20;border:1px solid #22375e;color:#edf2ff;border-radius:9px;padding:13px;font-family:inherit;outline:none"></textarea>
                    <button class="support-primary" type="submit">Abrir atendimento →</button>
                </form>
            </div>
        `);

        const form = document.getElementById("supportNewForm");
        if (!form) return;

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const assunto = document.getElementById("supportSubject").value.trim();
            const mensagem = document.getElementById("supportFirstMessage").value.trim();
            if (!assunto || !mensagem) return;

            const agora = new Date().toISOString();
            const atendimento = {
                id: "SUP" + Date.now().toString().slice(-8),
                cliente: usuarioAtual.nome,
                email: usuarioAtual.email,
                assunto: assunto,
                status: "Aberto",
                criadoEm: agora,
                atualizadoEm: agora,
                mensagens: [{
                    autor: "cliente",
                    nome: usuarioAtual.nome,
                    texto: mensagem,
                    data: agora
                }]
            };

            atendimentos.push(atendimento);
            salvarAtendimentos();
            mostrarNotificacao("Atendimento aberto", "Seu atendimento foi enviado para a equipe RC.");
            abrirChatSuporte(atendimento.id);
        });
    }

    function abrirChatSuporte(id) {
        if (!usuarioAtual) {
            mostrarLogin();
            return;
        }

        const atendimento = atendimentos.find(function (item) {
            return item.id === id && item.email === usuarioAtual.email;
        });

        if (!atendimento) {
            mostrarNotificacao("Atendimento não encontrado", "Esse atendimento não está disponível para sua conta.");
            return;
        }

        abrirModal(`
            <div class="support-chat-window">
                <div class="support-chat-head">
                    <div>
                        <strong>💬 ${escaparHTML(atendimento.assunto)}</strong>
                        <small>#${atendimento.id} • ${escaparHTML(atendimento.status)}</small>
                    </div>
                </div>
                <div class="support-messages" id="publicSupportMessages">
                    ${atendimento.mensagens.map(function (mensagem) {
                        const classe = mensagem.autor === "cliente" ? "customer" : "admin";
                        return `<div class="support-message ${classe}"><b>${mensagem.autor === "cliente" ? "Você" : "Equipe Mercado RC"}</b><p>${escaparHTML(mensagem.texto)}</p><small>${dataAtendimento(mensagem.data)}</small></div>`;
                    }).join("")}
                </div>
                ${atendimento.status === "Fechado" ? `<div class="support-empty" style="min-height:auto"><strong>Atendimento encerrado</strong>A equipe encerrou este atendimento. Aguarde orientações ou abra um novo atendimento se precisar de ajuda novamente.</div>` : `
                    <form id="publicSupportReply" class="support-composer">
                        <textarea id="publicSupportText" maxlength="1200" placeholder="Digite sua mensagem..." required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                `}
            </div>
        `);

        const messages = document.getElementById("publicSupportMessages");
        if (messages) messages.scrollTop = messages.scrollHeight;

        const reply = document.getElementById("publicSupportReply");
        if (reply) {
            reply.addEventListener("submit", function (event) {
                event.preventDefault();
                const campo = document.getElementById("publicSupportText");
                const texto = campo.value.trim();
                if (!texto) return;
                const agora = new Date().toISOString();
                atendimento.mensagens.push({ autor: "cliente", nome: usuarioAtual.nome, texto: texto, data: agora });
                atendimento.atualizadoEm = agora;
                atendimento.status = "Aberto";
                salvarAtendimentos();
                abrirChatSuporte(atendimento.id);
            });
        }
    }

    function mostrarMeusAtendimentos() {
        if (!usuarioAtual) {
            mostrarNotificacao("Login necessário", "Entre na sua conta para consultar seus atendimentos.");
            mostrarLogin();
            return;
        }

        const meus = atendimentos.filter(function (item) {
            return item.email === usuarioAtual.email;
        }).sort(function (a, b) {
            return new Date(b.atualizadoEm) - new Date(a.atualizadoEm);
        });

        abrirModal(`
            <div>
                <span class="eyebrow">SUPORTE RC</span>
                <h2 class="modal-title">Meus atendimentos</h2>
                <p class="modal-description">Acompanhe suas conversas com a equipe pelo chat.</p>
                <div class="support-admin-list">
                    ${meus.length ? meus.map(function (item) {
                        return `<button class="support-admin-ticket support-ticket-btn" data-public-ticket="${item.id}" type="button"><span><strong>${escaparHTML(item.assunto)}</strong><small>#${item.id} • ${dataAtendimento(item.atualizadoEm)}</small></span><span class="status ${item.status === "Fechado" ? "closed" : ""}">${item.status}</span></button>`;
                    }).join("") : `<div class="support-empty"><div><strong>Nenhum atendimento</strong>Você ainda não abriu uma conversa com o suporte.</div></div>`}
                </div>
                <button id="newSupportFromList" class="support-primary full" type="button">+ Novo atendimento</button>
            </div>
        `);

        document.querySelectorAll("[data-public-ticket]").forEach(function (button) {
            button.addEventListener("click", function () {
                abrirChatSuporte(button.dataset.publicTicket);
            });
        });

        const newButton = document.getElementById("newSupportFromList");
        if (newButton) newButton.addEventListener("click", abrirSuporteNovo);
    }

    function renderAdminSupport() {
        const painel = document.getElementById("admin-support");
        if (!painel) return;

        const lista = atendimentos.slice().sort(function (a, b) {
            return new Date(b.atualizadoEm) - new Date(a.atualizadoEm);
        });

        if (!atendimentoAdminSelecionado && lista.length) atendimentoAdminSelecionado = lista[0].id;
        const selecionado = lista.find(function (item) { return item.id === atendimentoAdminSelecionado; });

        painel.innerHTML = `
            <div class="support-chat">
                <div class="support-list">
                    <div class="support-list-title">ATENDIMENTOS (${lista.length})</div>
                    ${lista.length ? lista.map(function (item) {
                        return `<button class="support-ticket-btn ${selecionado && selecionado.id === item.id ? "active" : ""}" data-admin-ticket="${item.id}" type="button"><strong>${escaparHTML(item.assunto)}</strong><small>${escaparHTML(item.cliente)} • ${dataAtendimento(item.atualizadoEm)}</small><small>${item.id}</small></button>`;
                    }).join("") : `<div class="support-empty"><div><strong>Sem atendimentos</strong>Os novos chats aparecerão aqui.</div></div>`}
                </div>
                <div class="support-chat-window">
                    ${selecionado ? `
                        <div class="support-chat-head">
                            <div><strong>💬 ${escaparHTML(selecionado.assunto)}</strong><small>${escaparHTML(selecionado.cliente)} • ${escaparHTML(selecionado.email)} • #${selecionado.id}</small></div>
                            <div class="support-head-actions">
                                ${podeGerenciar() ? `<button id="adminSupportDelete" class="support-status-btn delete-action" type="button">Excluir atendimento</button>` : `<span class="permission-note">Excluir: Gerente+</span>`}
                                <button id="adminSupportStatus" class="support-status-btn ${selecionado.status === "Fechado" ? "reopen-action" : "close-action"}" type="button">${selecionado.status === "Fechado" ? "Reabrir atendimento" : "Encerrar atendimento"}</button>
                            </div>
                        </div>
                        <div class="support-messages" id="adminSupportMessages">
                            ${selecionado.mensagens.map(function (mensagem) {
                                const classe = mensagem.autor === "cliente" ? "customer" : "admin";
                                return `<div class="support-message ${classe}"><b>${mensagem.autor === "cliente" ? escaparHTML(mensagem.nome || "Cliente") : "Equipe Mercado RC"}</b><p>${escaparHTML(mensagem.texto)}</p><small>${dataAtendimento(mensagem.data)}</small></div>`;
                            }).join("")}
                        </div>
                        ${selecionado.status === "Fechado" ? `<div class="support-empty" style="min-height:auto"><strong>Atendimento encerrado</strong>Reabra para responder.</div>` : `<form id="adminSupportReply" class="support-composer"><textarea id="adminSupportText" maxlength="1200" placeholder="Responder ao cliente..." required></textarea><button type="submit">Responder</button></form>`}
                    ` : `<div class="support-empty"><div><strong>Selecione um atendimento</strong>As conversas aparecerão nesta área.</div></div>`}
                </div>
            </div>
        `;

        document.querySelectorAll("[data-admin-ticket]").forEach(function (button) {
            button.addEventListener("click", function () {
                atendimentoAdminSelecionado = button.dataset.adminTicket;
                renderAdminSupport();
            });
        });

        const messages = document.getElementById("adminSupportMessages");
        if (messages) messages.scrollTop = messages.scrollHeight;

        const deleteButton = document.getElementById("adminSupportDelete");
        if (deleteButton && selecionado) {
            deleteButton.addEventListener("click", function () {
                if (!podeGerenciar()) {
                    mostrarNotificacao("Permissão negada", "Somente Gerente ou Dono pode apagar atendimentos.");
                    return;
                }
                const confirmar = window.confirm("Excluir este atendimento definitivamente? As mensagens desta conversa serão apagadas deste navegador.");
                if (!confirmar) return;
                atendimentos = atendimentos.filter(function (item) { return item.id !== selecionado.id; });
                atendimentoAdminSelecionado = atendimentos.length ? atendimentos[0].id : null;
                salvarAtendimentos();
                renderAdminSupport();
                mostrarNotificacao("Atendimento apagado", "A conversa foi removida do painel administrativo.");
            });
        }

        const status = document.getElementById("adminSupportStatus");
        if (status && selecionado) {
            status.addEventListener("click", function () {
                const vaiFechar = selecionado.status !== "Fechado";
                selecionado.status = vaiFechar ? "Fechado" : "Aberto";
                selecionado.atualizadoEm = new Date().toISOString();
                atendimentoAdminSelecionado = selecionado.id;
                salvarAtendimentos();
                adicionarNotificacao(selecionado.email, vaiFechar ? "Atendimento encerrado" : "Atendimento reaberto", vaiFechar ? "O atendimento #" + selecionado.id + " foi encerrado pela equipe." : "O atendimento #" + selecionado.id + " foi reaberto pela equipe.", "suporte");
                renderAdminSupport();
                mostrarNotificacao(vaiFechar ? "Atendimento encerrado" : "Atendimento reaberto", vaiFechar ? "O atendimento foi fechado para o cliente." : "O atendimento foi reaberto.");
            });
        }

        const form = document.getElementById("adminSupportReply");
        if (form && selecionado) {
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                const campo = document.getElementById("adminSupportText");
                const texto = campo.value.trim();
                if (!texto) return;
                const agora = new Date().toISOString();
                selecionado.mensagens.push({ autor: "admin", nome: adminAtual ? adminAtual.nome : "Equipe Mercado RC", texto: texto, data: agora });
                selecionado.atualizadoEm = agora;
                selecionado.status = "Aberto";
                salvarAtendimentos();
                adicionarNotificacao(selecionado.email, "Nova resposta do suporte", "A equipe respondeu ao atendimento #" + selecionado.id + ".", "suporte");
                renderAdminSupport();
                mostrarNotificacao("Resposta enviada", "A mensagem foi registrada no atendimento.");
            });
        }
    }


    /* =========================
       ÁREA ADMINISTRATIVA ESCONDIDA
    ========================= */

    function salvarEstoque() {
        localStorage.setItem("mercadoRC_estoque", JSON.stringify(estoque));
    }

    function salvarPedidos() {
        localStorage.setItem("mercadoRC_pedidos", JSON.stringify(pedidos));
    }

    function formatarDataPedido(data) {
        return new Date(data).toLocaleString("pt-BR");
    }

    function abrirLoginAdmin() {
        abrirModal(`
            <div class="admin-login-box">
                <span class="eyebrow">MERCADO RC • ADMIN</span>
                <h2 class="modal-title">Acesso administrativo</h2>
                <p class="modal-description">No celular, use este mesmo botão e informe seu e-mail administrativo + senha.</p>
                <form id="adminLoginForm" class="form">
                    <input type="email" id="adminLoginEmail" placeholder="E-mail do administrador" required autocomplete="username">
                    <input type="password" id="adminPassword" placeholder="Senha administrativa" required autocomplete="current-password">
                    <button type="submit" class="primary full">Acessar painel</button>
                </form>
                <div class="admin-warning">Demonstração: o acesso usa os cargos salvos no perfil. Para testar o proprietário, use <b>dono@mercado-rc.local</b> com a senha administrativa. Em produção, a autenticação deve ficar no servidor.</div>
            </div>
        `);

        document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("adminLoginEmail").value.trim().toLowerCase();
            const senha = document.getElementById("adminPassword").value;

            if (senha !== ADMIN_PASSWORD) {
                mostrarNotificacao("Acesso negado", "Senha administrativa incorreta.");
                return;
            }

            if (email === "dono@mercado-rc.local") {
                adminAtual = { email: email, nome: "Proprietário RC", cargo: "Dono" };
            } else {
                const usuarios = JSON.parse(localStorage.getItem("mercadoRC_usuarios")) || [];
                const usuario = usuarios.find(function (u) {
                    return String(u.email || "").toLowerCase() === email &&
                        (nivelCargo[u.cargo] >= 1 || cargosSite.some(function (cargo) { return cargo.nome === u.cargo; }));
                });
                if (!usuario) {
                    mostrarNotificacao("Acesso negado", "Este e-mail não possui um cargo administrativo.");
                    return;
                }
                adminAtual = { email: usuario.email, nome: usuario.nome, cargo: usuario.cargo };
            }

            localStorage.setItem("mercadoRC_adminAtual", JSON.stringify(adminAtual));
            mostrarPainelAdmin();
            mostrarNotificacao("Painel liberado", "Acesso como " + adminAtual.cargo + " autorizado.");
        });
    }

    function mostrarPainelAdmin() {
        abrirModal(`
            <div class="admin-head">
                <div>
                    <span class="eyebrow">MERCADO RC • CENTRAL</span>
                    <h2 class="modal-title">Painel Administrativo</h2>
                    <small>Usuário: ${escaparHTML(adminAtual ? adminAtual.nome : "Equipe RC")} • Cargo: <b id="adminCurrentRole">${escaparHTML(adminAtual ? adminAtual.cargo : "—")}</b></small>
                </div>
                <div class="admin-session-actions">
                    <span class="admin-badge">ADMINISTRADOR</span>
                    <button id="adminLogoutButton" class="support-status-btn" type="button">Sair do painel</button>
                </div>
            </div>

            <div class="admin-grid">
                <div class="admin-card"><span>Usuários</span><strong id="adminUsersCount">0</strong></div>
                <div class="admin-card"><span>Pedidos</span><strong id="adminOrdersCount">0</strong></div>
                <div class="admin-card"><span>Itens vendidos</span><strong id="adminItemsCount">0</strong></div>
                <div class="admin-card"><span>Faturamento</span><strong id="adminRevenue">R$ 0,00</strong></div>
            </div>

            <div class="admin-tabs">
                <button class="admin-tab active" data-admin-tab="overview">Visão geral</button>
                <button class="admin-tab" data-admin-tab="users">Usuários</button>
                <button class="admin-tab" data-admin-tab="orders">Compras</button>
                <button class="admin-tab" data-admin-tab="stock">Estoque</button>
                <button class="admin-tab" data-admin-tab="support">💬 Suporte</button>
                <button class="admin-tab" data-admin-tab="links">🌐 Links oficiais</button>
                <button class="admin-tab" data-admin-tab="roles">🛡️ Cargos</button>
            </div>

            <div class="admin-panel active" id="admin-overview"></div>
            <div class="admin-panel" id="admin-users"></div>
            <div class="admin-panel" id="admin-orders"></div>
            <div class="admin-panel" id="admin-stock"></div>
            <div class="admin-panel" id="admin-support"></div>
            <div class="admin-panel" id="admin-links"></div>
            <div class="admin-panel" id="admin-roles"></div>
        `);

        if (modal) modal.classList.add("admin-modal");

        const adminLogoutButton = document.getElementById("adminLogoutButton");
        if (adminLogoutButton) {
            adminLogoutButton.addEventListener("click", function () {
                adminAtual = null;
                localStorage.removeItem("mercadoRC_adminAtual");
                fecharModal();
                mostrarNotificacao("Painel encerrado", "A sessão administrativa foi encerrada.");
            });
        }

        document.querySelectorAll(".admin-tab").forEach(function (tab) {
            tab.addEventListener("click", function () {
                document.querySelectorAll(".admin-tab").forEach(function (t) { t.classList.remove("active"); });
                document.querySelectorAll(".admin-panel").forEach(function (p) { p.classList.remove("active"); });
                tab.classList.add("active");
                document.getElementById("admin-" + tab.dataset.adminTab).classList.add("active");
            });
        });

        renderAdminDashboard();
    }

    function renderAdminDashboard() {
        const usuarios = JSON.parse(localStorage.getItem("mercadoRC_usuarios")) || [];
        const itensVendidos = pedidos.reduce(function (total, pedido) {
            return total + pedido.itens.reduce(function (soma, item) { return soma + item.quantidade; }, 0);
        }, 0);
        const faturamento = pedidos.reduce(function (total, pedido) { return total + pedido.total; }, 0);

        document.getElementById("adminUsersCount").textContent = usuarios.length;
        document.getElementById("adminOrdersCount").textContent = pedidos.length;
        document.getElementById("adminItemsCount").textContent = itensVendidos;
        document.getElementById("adminRevenue").textContent = dinheiro(faturamento);

        const adminRoleText = document.getElementById("adminCurrentRole");
        if (adminRoleText) adminRoleText.textContent = adminAtual ? adminAtual.cargo : "Sem cargo";

        const confirmados = pedidos.filter(function(p){return p.status === "Confirmado";}).length;
        const pendentes = pedidos.length - confirmados;
        const baixoEstoque = produtos.filter(function(p){return (estoque[p.id]||0) <= 5;});
        const recentes = pedidos.slice().sort(function(a,b){return new Date(b.data)-new Date(a.data);}).slice(0,5);
        document.getElementById("admin-overview").innerHTML = `
            <div class="admin-card admin-welcome-card">
                <span>SESSÃO ATUAL</span>
                <strong>${escaparHTML(adminAtual ? adminAtual.nome : "Equipe RC")}</strong>
                <p>Você está conectado como <b>${escaparHTML(adminAtual ? adminAtual.cargo : "—")}</b>. Todos os cargos podem confirmar compras; exclusão de atendimentos e contas é restrita a Gerente e Dono.</p>
            </div>
            <div class="admin-overview-grid">
                <div class="admin-chart-card"><span class="eyebrow">STATUS DOS PEDIDOS</span><div class="admin-bar-row"><span>Confirmados</span><b>${confirmados}</b></div><div class="admin-bar"><i style="width:${pedidos.length ? Math.min(100,confirmados/pedidos.length*100):0}%"></i></div><div class="admin-bar-row"><span>Pendentes</span><b>${pendentes}</b></div><div class="admin-bar pending"><i style="width:${pedidos.length ? Math.min(100,pendentes/pedidos.length*100):0}%"></i></div></div>
                <div class="admin-chart-card"><span class="eyebrow">ESTOQUE BAIXO</span>${baixoEstoque.length ? baixoEstoque.slice(0,5).map(function(p){return `<div class="admin-low-stock"><span>${escaparHTML(p.nome)}</span><b>${estoque[p.id]||0}</b></div>`;}).join("") : `<div class="payment-empty">Nenhum produto com estoque baixo.</div>`}</div>
            </div>
            <div class="admin-recent-card"><div class="admin-settings-head"><div><span class="eyebrow">MOVIMENTAÇÕES</span><h3>Últimos pedidos</h3></div></div>${recentes.length ? recentes.map(function(p){return `<div class="admin-recent-row"><span>#${escaparHTML(p.id)} • ${escaparHTML(p.cliente)}</span><b>${dinheiro(p.total)}</b></div>`;}).join("") : `<div class="payment-empty">Nenhum pedido registrado.</div>`}</div>
            <div class="admin-permission-grid">
                <div><b>✓ Confirmar compras</b><small>Todos os cargos administrativos</small></div>
                <div><b>🔒 Excluir atendimento</b><small>Gerente e Dono</small></div>
                <div><b>🔒 Excluir conta</b><small>Gerente e Dono</small></div>
                <div><b>🛡️ Gerenciar cargos</b><small>Senha de cargos + permissão de Gerente/Dono</small></div>
            </div>
        `;

        document.getElementById("admin-users").innerHTML = usuarios.length ? `
            <div class="admin-scroll"><table class="admin-table">
                <thead><tr><th>Perfil</th><th>E-mail</th><th>Localização</th><th>Cargo</th><th>Ações</th></tr></thead>
                <tbody>${usuarios.map(function (u) {
                    const cargo = u.cargo || "Cliente";
                    const podeExcluirConta = podeGerenciar();
                    return `<tr>
                        <td><strong>${escaparHTML(u.nome || "Sem nome")}</strong><small class="admin-cell-sub">${escaparHTML(u.cep || "Sem CEP")}</small></td>
                        <td>${escaparHTML(u.email)}</td>
                        <td>${escaparHTML(u.cidade || "—")} / ${escaparHTML(u.estado || "—")}</td>
                        <td><span class="role-pill">${escaparHTML(cargo)}</span></td>
                        <td><div class="admin-user-actions">
                            <button class="stock-actions-btn admin-profile-user" data-user-email="${escaparHTML(u.email)}" type="button">Ver perfil</button>
                            ${podeExcluirConta ? `<button class="stock-actions-btn admin-delete-user" data-user-email="${escaparHTML(u.email)}" type="button">Apagar conta</button>` : `<span class="permission-note">Gerente+</span>`}
                        </div></td>
                    </tr>`;
                }).join("")}</tbody>
            </table></div>
        ` : `<div class="admin-empty">Nenhum usuário cadastrado.</div>`;

        document.getElementById("admin-orders").innerHTML = pedidos.length ? `
            <div class="admin-scroll"><table class="admin-table">
                <thead><tr><th>Pedido</th><th>Cliente</th><th>Itens</th><th>Total</th><th>Data</th><th>Status</th><th>Ação</th></tr></thead>
                <tbody>${pedidos.slice().reverse().map(function (pedido) {
                    const confirmado = pedido.status === "Confirmado";
                    return `<tr>
                        <td>#${escaparHTML(pedido.id)}</td>
                        <td>${escaparHTML(pedido.cliente)}<small class="admin-cell-sub">${escaparHTML(pedido.email)}</small></td>
                        <td>${pedido.itens.map(function(i){return escaparHTML(i.nome) + " × " + i.quantidade;}).join("<br>")}</td>
                        <td>${dinheiro(pedido.total)}</td>
                        <td>${formatarDataPedido(pedido.data)}</td>
                        <td><span class="order-status ${confirmado ? "confirmed" : ""}">${escaparHTML(pedido.status)}</span></td>
                        <td>${confirmado ? `<span class="confirmed-by">✓ ${escaparHTML(pedido.confirmadoPor || "Equipe RC")}</span>` : (podeConfirmarCompra() ? `<button class="stock-actions-btn confirm-order" data-order-id="${escaparHTML(pedido.id)}" type="button">✓ Confirmar compra</button>` : `<span class="permission-note">Sem acesso</span>`)}</td>
                    </tr>`;
                }).join("")}</tbody>
            </table></div>
        ` : `<div class="admin-empty">Nenhuma compra registrada.</div>`;

        document.getElementById("admin-stock").innerHTML = `
            <div class="admin-scroll"><table class="admin-table">
                <thead><tr><th>Produto</th><th>Jogo</th><th>Preço</th><th>Estoque</th><th>Ações</th></tr></thead>
                <tbody>${produtos.map(function (produto) {
                    const qtd = estoque[produto.id] || 0;
                    return `<tr><td>${produto.icone} ${escaparHTML(produto.nome)}</td><td>${escaparHTML(produto.jogo)}</td><td>${dinheiro(produto.preco)}</td><td><strong id="stock-${produto.id}">${qtd}</strong></td><td><div class="stock-actions"><button data-stock="minus" data-id="${produto.id}" type="button">−</button><button data-stock="plus" data-id="${produto.id}" type="button">+</button></div></td></tr>`;
                }).join("")}</tbody>
            </table></div>
        `;

        document.querySelectorAll("[data-stock]").forEach(function (button) {
            button.addEventListener("click", function () {
                const id = Number(button.dataset.id);
                estoque[id] = Math.max(0, (estoque[id] || 0) + (button.dataset.stock === "plus" ? 1 : -1));
                salvarEstoque();
                renderizarProdutos();
                renderAdminDashboard();
                mostrarNotificacao("Estoque atualizado", "Quantidade alterada com sucesso.");
            });
        });

        document.querySelectorAll(".confirm-order").forEach(function (button) {
            button.addEventListener("click", function () {
                if (!podeConfirmarCompra()) {
                    mostrarNotificacao("Permissão negada", "Seu cargo não possui acesso para confirmar compras.");
                    return;
                }
                const pedido = pedidos.find(function (item) { return item.id === button.dataset.orderId; });
                if (!pedido || pedido.status === "Confirmado") return;
                pedido.status = "Confirmado";
                pedido.confirmadoPor = adminAtual ? adminAtual.nome + " • " + adminAtual.cargo : "Equipe RC";
                pedido.confirmadoEm = new Date().toISOString();
                salvarPedidos();
                adicionarNotificacao(pedido.email, "Compra confirmada", "O pedido #" + pedido.id + " foi confirmado pela equipe Mercado RC.", "sucesso");
                renderAdminDashboard();
                mostrarNotificacao("Compra confirmada", "O pedido #" + pedido.id + " foi marcado como confirmado.");
            });
        });

        document.querySelectorAll(".admin-profile-user").forEach(function (button) {
            button.addEventListener("click", function () {
                abrirPerfilAdmin(button.dataset.userEmail);
            });
        });

        document.querySelectorAll(".admin-delete-user").forEach(function (button) {
            button.addEventListener("click", function () {
                if (!podeGerenciar()) {
                    mostrarNotificacao("Permissão negada", "Somente Gerente ou Dono pode apagar contas.");
                    return;
                }
                const email = button.dataset.userEmail;
                if (adminAtual && adminAtual.email === email) {
                    mostrarNotificacao("Ação bloqueada", "A conta administrativa em uso não pode ser apagada por ela mesma.");
                    return;
                }
                const usuario = usuarios.find(function (u) { return u.email === email; });
                if (!usuario) return;
                if (!window.confirm("Apagar a conta de " + usuario.nome + "? Os pedidos históricos serão preservados.")) return;
                const novosUsuarios = usuarios.filter(function (u) { return u.email !== email; });
                localStorage.setItem("mercadoRC_usuarios", JSON.stringify(novosUsuarios));
                mostrarNotificacao("Conta apagada", "O cadastro foi removido. O histórico de pedidos foi preservado.");
                renderAdminDashboard();
            });
        });

        renderAdminSupport();
        renderAdminLinks();
        renderAdminRoles();
    }

    function abrirPerfilAdmin(email) {
        const usuarios = JSON.parse(localStorage.getItem("mercadoRC_usuarios")) || [];
        const usuario = usuarios.find(function (u) { return u.email === email; });
        if (!usuario) return;

        const pagamentos = usuario.pagamentos || {};
        const podeAlterarCargo = podeGerenciar();

        abrirModal(`
            <div class="admin-user-profile">
                <span class="eyebrow">PERFIL DO COMPRADOR</span>
                <h2 class="modal-title">${escaparHTML(usuario.nome || "Usuário")}</h2>
                <p class="modal-description">Consulte os dados e, se tiver permissão, atribua um cargo administrativo.</p>
                <div class="admin-profile-grid">
                    <div><span>E-mail</span><strong>${escaparHTML(usuario.email)}</strong></div>
                    <div><span>CEP</span><strong>${escaparHTML(usuario.cep || "—")}</strong></div>
                    <div><span>Endereço</span><strong>${escaparHTML(usuario.endereco || "—")}</strong></div>
                    <div><span>Cidade / Estado</span><strong>${escaparHTML((usuario.cidade || "—") + " / " + (usuario.estado || "—"))}</strong></div>
                    <div><span>Cargo atual</span><strong>${escaparHTML(usuario.cargo || "Cliente")}</strong></div>
                    <div><span>Pagamento salvo</span><strong>${pagamentos.cartao ? "Cartão •••• " + escaparHTML(pagamentos.cartao.final) : pagamentos.pix ? "PIX salvo" : "Nenhum"}</strong></div>
                </div>

                ${podeAlterarCargo ? `
                    <div class="admin-role-assignment">
                        <div><span class="eyebrow">EQUIPE</span><h3>Adicionar administrador ao cargo</h3><p>Escolha o cargo que ficará vinculado a este perfil.</p></div>
                        <form id="assignUserRoleForm" class="form">
                            <select id="assignUserRole" required>
                                <option value="">Selecionar cargo</option>
                                ${cargosSite.map(function (cargo) {
                                    if (cargo.nome === "Dono" && nivelDoAdmin() < 5) return "";
                                    return `<option value="${escaparHTML(cargo.nome)}" ${usuario.cargo === cargo.nome ? "selected" : ""}>${escaparHTML(cargo.nome)}</option>`;
                                }).join("")}
                                <option value="Cliente" ${!usuario.cargo ? "selected" : ""}>Cliente</option>
                            </select>
                            <button class="primary full" type="submit">Salvar cargo no perfil</button>
                        </form>
                    </div>
                ` : `<div class="admin-warning">Somente Gerente ou Dono pode alterar o cargo deste perfil.</div>`}

                <button id="closeAdminProfile" class="profile-action" type="button">Voltar ao painel</button>
            </div>
        `);

        const assignForm = document.getElementById("assignUserRoleForm");
        if (assignForm) {
            assignForm.addEventListener("submit", function (event) {
                event.preventDefault();
                if (!podeGerenciar()) {
                    mostrarNotificacao("Permissão negada", "Somente Gerente ou Dono pode atribuir cargos.");
                    return;
                }
                const novoCargo = document.getElementById("assignUserRole").value;
                if (!novoCargo) return;
                if (novoCargo === "Dono" && nivelDoAdmin() < 5) {
                    mostrarNotificacao("Ação bloqueada", "Somente o Dono pode atribuir o cargo Dono.");
                    return;
                }
                usuario.cargo = novoCargo === "Cliente" ? "" : novoCargo;
                const idx = usuarios.findIndex(function (u) { return u.email === usuario.email; });
                if (idx >= 0) usuarios[idx] = usuario;
                localStorage.setItem("mercadoRC_usuarios", JSON.stringify(usuarios));
                if (usuarioAtual && usuarioAtual.email === usuario.email) {
                    usuarioAtual = usuario;
                    salvarUsuarioAtual();
                }
                fecharModal();
                renderAdminDashboard();
                mostrarNotificacao("Cargo atualizado", usuario.nome + " agora está como " + (usuario.cargo || "Cliente") + ".");
            });
        }

        const back = document.getElementById("closeAdminProfile");
        if (back) back.addEventListener("click", function () {
            fecharModal();
            mostrarPainelAdmin();
        });
    }

    function salvarCargos() {
        localStorage.setItem("mercadoRC_cargos", JSON.stringify(cargosSite));
    }

    function renderAdminRoles() {
        const painel = document.getElementById("admin-roles");
        if (!painel) return;

        if (!podeGerenciar()) {
            painel.innerHTML = `
                <div class="admin-settings-card roles-lock-card">
                    <div class="admin-settings-head">
                        <div><span class="eyebrow">ACESSO RESTRITO</span><h3>Gerenciamento de cargos</h3><p>Somente Gerente ou Dono pode acessar a edição de cargos.</p></div>
                        <span class="admin-badge">GERENTE+</span>
                    </div>
                    <div class="admin-warning">Seu cargo atual é <b>${escaparHTML(adminAtual ? adminAtual.cargo : "—")}</b>. Peça a um Gerente ou Dono para realizar esta alteração.</div>
                </div>`;
            return;
        }

        if (!cargosAutorizados) {
            painel.innerHTML = `
                <div class="admin-settings-card roles-lock-card">
                    <div class="admin-settings-head">
                        <div><span class="eyebrow">ÁREA RESTRITA</span><h3>Gerenciamento de cargos</h3><p>Somente quem possuir a senha específica pode criar, editar ou apagar cargos do site.</p></div>
                        <span class="admin-badge">PROTEGIDO</span>
                    </div>
                    <button id="unlockRolesButton" class="primary full" type="button">🔐 Autorizar gerenciamento</button>
                    <div class="admin-warning">Senha de cargos separada da senha principal do painel. Nesta versão demonstrativa, a proteção é feita no navegador.</div>
                </div>`;
            const unlock = document.getElementById("unlockRolesButton");
            if (unlock) unlock.addEventListener("click", function () {
                abrirModal(`
                    <div class="admin-login-box">
                        <span class="eyebrow">MERCADO RC • CARGOS</span>
                        <h2 class="modal-title">Autorizar cargos</h2>
                        <p class="modal-description">Informe a senha exclusiva para alterar os cargos.</p>
                        <form id="rolesPasswordForm" class="form">
                            <input type="password" id="rolesPassword" placeholder="Senha de cargos" required autocomplete="off">
                            <button type="submit" class="primary full">Liberar gerenciamento</button>
                        </form>
                    </div>`);
                document.getElementById("rolesPasswordForm").addEventListener("submit", function (event) {
                    event.preventDefault();
                    if (document.getElementById("rolesPassword").value !== ADMIN_ROLES_PASSWORD) {
                        mostrarNotificacao("Acesso negado", "Senha de cargos incorreta.");
                        return;
                    }
                    cargosAutorizados = true;
                    fecharModal();
                    renderAdminRoles();
                    mostrarNotificacao("Gerenciamento liberado", "Agora você pode alterar os cargos do site.");
                });
            });
            return;
        }

        painel.innerHTML = `
            <div class="admin-settings-card">
                <div class="admin-settings-head">
                    <div><span class="eyebrow">HIERARQUIA DO SITE</span><h3>Gerenciar cargos</h3><p>Crie, edite ou remova os cargos utilizados pelo Mercado RC.</p></div>
                    <button id="lockRolesButton" class="support-status-btn close-action" type="button">Bloquear edição</button>
                </div>
                <form id="newRoleForm" class="admin-role-form">
                    <input id="newRoleName" type="text" maxlength="35" placeholder="Nome do novo cargo" required>
                    <input id="newRoleDescription" type="text" maxlength="100" placeholder="Descrição do cargo" required>
                    <input id="newRoleColor" type="text" maxlength="20" value="#8b35d9" placeholder="#8b35d9" required>
                    <button class="primary" type="submit">+ Adicionar cargo</button>
                </form>
                <div class="admin-role-list">
                    ${cargosSite.map(function (cargo) {
                        return `<article class="admin-role-card">
                            <div class="role-color" style="--role-color:${escaparHTML(cargo.cor || "#8b35d9")}"></div>
                            <div class="role-content"><strong>${escaparHTML(cargo.nome)}</strong><p>${escaparHTML(cargo.descricao)}</p><small>${escaparHTML(cargo.cor || "#8b35d9")}</small></div>
                            <div class="role-actions"><button class="stock-actions-btn role-edit" data-role-edit="${cargo.id}" type="button">Editar</button><button class="stock-actions-btn role-delete" data-role-delete="${cargo.id}" type="button">Excluir</button></div>
                        </article>`;
                    }).join("")}
                </div>
            </div>`;

        document.getElementById("lockRolesButton").addEventListener("click", function () {
            cargosAutorizados = false;
            renderAdminRoles();
            mostrarNotificacao("Edição bloqueada", "O gerenciamento de cargos foi protegido novamente.");
        });

        document.getElementById("newRoleForm").addEventListener("submit", function (event) {
            event.preventDefault();
            const nome = document.getElementById("newRoleName").value.trim();
            const descricao = document.getElementById("newRoleDescription").value.trim();
            const cor = document.getElementById("newRoleColor").value.trim();
            if (!/^#[0-9a-fA-F]{6}$/.test(cor)) {
                mostrarNotificacao("Cor inválida", "Use uma cor no formato #RRGGBB.");
                return;
            }
            cargosSite.push({ id: Date.now(), nome: nome, descricao: descricao, cor: cor });
            salvarCargos();
            renderAdminRoles();
            mostrarNotificacao("Cargo criado", "O novo cargo foi adicionado.");
        });

        document.querySelectorAll("[data-role-edit]").forEach(function (button) {
            button.addEventListener("click", function () {
                const cargo = cargosSite.find(function (item) { return item.id === Number(button.dataset.roleEdit); });
                if (!cargo) return;
                abrirModal(`
                    <div class="admin-login-box">
                        <span class="eyebrow">EDITAR CARGO</span>
                        <h2 class="modal-title">${escaparHTML(cargo.nome)}</h2>
                        <form id="editRoleForm" class="form">
                            <input id="editRoleName" type="text" maxlength="35" value="${escaparHTML(cargo.nome)}" required>
                            <input id="editRoleDescription" type="text" maxlength="100" value="${escaparHTML(cargo.descricao)}" required>
                            <input id="editRoleColor" type="text" maxlength="20" value="${escaparHTML(cargo.cor || "#8b35d9")}" required>
                            <button type="submit" class="primary full">Salvar alterações</button>
                        </form>
                    </div>`);
                document.getElementById("editRoleForm").addEventListener("submit", function (event) {
                    event.preventDefault();
                    const cor = document.getElementById("editRoleColor").value.trim();
                    if (!/^#[0-9a-fA-F]{6}$/.test(cor)) {
                        mostrarNotificacao("Cor inválida", "Use uma cor no formato #RRGGBB.");
                        return;
                    }
                    cargo.nome = document.getElementById("editRoleName").value.trim();
                    cargo.descricao = document.getElementById("editRoleDescription").value.trim();
                    cargo.cor = cor;
                    salvarCargos();
                    fecharModal();
                    renderAdminRoles();
                    mostrarNotificacao("Cargo atualizado", "As alterações foram salvas.");
                });
            });
        });

        document.querySelectorAll("[data-role-delete]").forEach(function (button) {
            button.addEventListener("click", function () {
                if (cargosSite.length <= 1) {
                    mostrarNotificacao("Ação bloqueada", "Mantenha pelo menos um cargo cadastrado.");
                    return;
                }
                const id = Number(button.dataset.roleDelete);
                const cargo = cargosSite.find(function (item) { return item.id === id; });
                if (!cargo) return;
                if (!window.confirm("Excluir o cargo \"" + cargo.nome + "\"?")) return;
                cargosSite = cargosSite.filter(function (item) { return item.id !== id; });
                salvarCargos();
                renderAdminRoles();
                mostrarNotificacao("Cargo excluído", "O cargo foi removido.");
            });
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
            event.preventDefault();
            abrirLoginAdmin();
        }
    });

    /* BUSCA DE PRODUTOS */
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const termo = searchInput.value.trim().toLowerCase();
            document.querySelectorAll("#products .product").forEach(function (card) {
                card.style.display = card.textContent.toLowerCase().includes(termo) ? "" : "none";
            });
        });
    }

    /* =========================
       FILTROS
    ========================= */

    const filters =
        document.querySelectorAll(
            ".filter"
        );

    filters.forEach(
        function (filter) {

            filter.addEventListener(
                "click",
                function () {

                    filters.forEach(
                        function (item) {

                            item.classList.remove(
                                "active"
                            );

                        }
                    );

                    filter.classList.add(
                        "active"
                    );

                    renderizarProdutos(
                        filter.dataset.game
                    );

                }
            );

        }
    );


    /* =========================
       VISUAL / FUNÇÕES EXTRAS
    ========================= */

    /* ACESSO ADMINISTRATIVO OCULTO NO CELULAR
       5 toques rápidos no logo Mercado RC.
       O acesso não é exibido para compradores; depois dos 5 toques
       ainda é obrigatório informar as credenciais administrativas. */
    const secretAdminLogo = document.getElementById("secretAdminLogo");
    let adminTapCount = 0;
    let adminTapTimer = null;
    let adminTapCooldown = false;

    if (secretAdminLogo) {
        secretAdminLogo.addEventListener("click", function (event) {
            const toqueCelular = window.matchMedia && window.matchMedia("(max-width: 800px) and (pointer: coarse)").matches;
            if (!toqueCelular || adminTapCooldown) return;

            event.preventDefault();
            adminTapCount += 1;

            clearTimeout(adminTapTimer);
            adminTapTimer = setTimeout(function () {
                adminTapCount = 0;
            }, 1800);

            if (adminTapCount === 5) {
                adminTapCount = 0;
                clearTimeout(adminTapTimer);
                adminTapCooldown = true;

                if (navigator.vibrate) navigator.vibrate([30, 40, 30]);
                abrirLoginAdmin();

                setTimeout(function () {
                    adminTapCooldown = false;
                }, 1200);
            }
        });
    }

    renderLinksOficiais();

    const rgbToggle = document.getElementById("rgbToggle");
    if (rgbToggle) {
        rgbToggle.addEventListener("click", function () {
            document.body.classList.toggle("rgb-mode");
            localStorage.setItem("mercadoRC_rgb", document.body.classList.contains("rgb-mode") ? "1" : "0");
            mostrarNotificacao("Modo RGB", document.body.classList.contains("rgb-mode") ? "Iluminação RGB ativada." : "Iluminação RGB reduzida.");
        });
        if (localStorage.getItem("mercadoRC_rgb") === "1") document.body.classList.add("rgb-mode");
    }

    const sortProducts = document.getElementById("sortProducts");
    if (sortProducts) {
        sortProducts.addEventListener("change", function () {
            ordemProdutos = sortProducts.value;
            const filtroAtivo = document.querySelector(".filter.active");
            renderizarProdutos(filtroAtivo ? filtroAtivo.dataset.game : "Todos");
        });
    }

    const couponButton = document.getElementById("couponButton");
    if (couponButton) {
        couponButton.addEventListener("click", function () {
            aplicarCupom("RC10");
        });
    }

    const discordCommunityButton = document.getElementById("discordCommunityButton");
    if (discordCommunityButton) {
        discordCommunityButton.addEventListener("click", function () {
            const url = linkSeguro(linksOficiais.discord);
            if (url) window.open(url, "_blank", "noopener,noreferrer");
            else mostrarNotificacao("Discord não configurado", "O administrador ainda não definiu o link oficial.");
        });
    }

    const supportQuickButton = document.getElementById("supportQuickButton");
    if (supportQuickButton) {
        supportQuickButton.addEventListener("click", function () {
            if (usuarioAtual) mostrarMeusAtendimentos();
            else abrirSuporteNovo();
        });
    }

    const openSupportButton = document.getElementById("openSupportButton");
    if (openSupportButton) openSupportButton.addEventListener("click", abrirSuporteNovo);

    const mySupportButton = document.getElementById("mySupportButton");
    if (mySupportButton) mySupportButton.addEventListener("click", mostrarMeusAtendimentos);

    const favoritesShortcut = document.getElementById("favoritesShortcut");
    if (favoritesShortcut) favoritesShortcut.addEventListener("click", mostrarFavoritos);

    const neonCouponButton = document.getElementById("neonCouponButton");
    if (neonCouponButton) neonCouponButton.addEventListener("click", function(){ aplicarCupom("NEON20"); });

    const quickOrders = document.getElementById("quickOrders");
    if (quickOrders) {
        quickOrders.addEventListener("click", function () {
            if (usuarioAtual) mostrarPerfil();
            else mostrarLogin();
        });
    }


    /* =========================
       BOTÕES
    ========================= */

    if (cartButton) {

        cartButton.addEventListener(
            "click",
            abrirCarrinho
        );

    }


    if (closeCart) {

        closeCart.addEventListener(
            "click",
            fecharCarrinho
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            fecharCarrinho
        );

    }


    if (loginButton) {

        loginButton.addEventListener(
            "click",
            function () {

                if (usuarioAtual) {

                    mostrarPerfil();

                } else {

                    mostrarLogin();

                }

            }
        );

    }

    if (notificationBell) {
        notificationBell.addEventListener("click", mostrarNotificacoes);
    }


    if (closeModal) {

        closeModal.addEventListener(
            "click",
            fecharModal
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    fecharModal();

                }

            }
        );

    }


    if (closeNotification) {

        closeNotification.addEventListener(
            "click",
            fecharNotificacao
        );

    }


    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            function () {

                document
                    .getElementById("jogos")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }


    if (offersButton) {

        offersButton.addEventListener(
            "click",
            function () {

                document
                    .getElementById("ofertas")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }


    function aplicarCupom(codigo) {
        const mapa={"RC10":{percentual:10,minimo:0},"NEON20":{percentual:20,minimo:100}};
        const c=mapa[String(codigo||"").toUpperCase()];
        if(!c) { mostrarNotificacao("Cupom inválido","Esse código não está disponível."); return false; }
        cupomAtual={codigo:String(codigo).toUpperCase(),percentual:c.percentual,minimo:c.minimo};
        localStorage.setItem("mercadoRC_cupomAtual",JSON.stringify(cupomAtual));
        mostrarNotificacao("Cupom aplicado", cupomAtual.codigo+" garante "+cupomAtual.percentual+"% de desconto no checkout.");
        return true;
    }

    function descontoCupom(total) {
        if(!cupomAtual) return 0;
        if(total < cupomAtual.minimo) return 0;
        return total*(cupomAtual.percentual/100);
    }

    /* =========================
       FINALIZAR COMPRA
    ========================= */

    if (checkoutButton) {
        checkoutButton.addEventListener("click", function () {
            if (carrinho.length === 0) {
                mostrarNotificacao("Carrinho vazio", "Adicione um produto antes de finalizar a compra.");
                return;
            }

            if (!usuarioAtual) {
                mostrarNotificacao("Login necessário", "Entre ou crie uma conta antes de finalizar a compra.");
                mostrarLogin();
                return;
            }

            const possuiFisico = carrinho.some(function (produto) { return produto.tipo === "fisico"; });
            if (possuiFisico && (!usuarioAtual.endereco || !usuarioAtual.cep)) {
                mostrarNotificacao("Endereço necessário", "Cadastre seu endereço para receber produtos físicos.");
                mostrarPerfil();
                return;
            }

            const semEstoque = carrinho.find(function (produto) { return (estoque[produto.id] || 0) <= 0; });
            if (semEstoque) {
                mostrarNotificacao("Estoque insuficiente", semEstoque.nome + " não possui estoque disponível.");
                renderizarProdutos();
                return;
            }

            const grupos = {};
            carrinho.forEach(function (produto) {
                if (!grupos[produto.id]) grupos[produto.id] = { produto: produto, quantidade: 0 };
                grupos[produto.id].quantidade++;
            });

            const itens = Object.values(grupos).map(function (grupo) {
                return {
                    id: grupo.produto.id,
                    nome: grupo.produto.nome,
                    jogo: grupo.produto.jogo,
                    quantidade: grupo.quantidade,
                    preco: grupo.produto.preco,
                    tipo: grupo.produto.tipo
                };
            });

            if (itens.some(function (item) { return item.quantidade > (estoque[item.id] || 0); })) {
                mostrarNotificacao("Estoque insuficiente", "A quantidade solicitada excede o estoque disponível.");
                return;
            }

            const subtotal = itens.reduce(function (soma, item) { return soma + item.preco * item.quantidade; }, 0);
            const desconto = descontoCupom(subtotal);
            const total = Math.max(0, subtotal - desconto);
            const pagamentosSalvos = usuarioAtual.pagamentos || {};
            const pedidoTeste = "RC" + Date.now().toString().slice(-8);
            const linkPagamentoTeste = "https://mercado-rc.test/pagamento/" + pedidoTeste + "?valor=" + total.toFixed(2);
            const qrPagamento = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=" + encodeURIComponent(linkPagamentoTeste);

            const opcoesPagamento = [
                `<option value="PIX">PIX${pagamentosSalvos.pix ? " • salvo" : ""}</option>`,
                `<option value="Cartão">Cartão${pagamentosSalvos.cartao ? " •••• " + escaparHTML(pagamentosSalvos.cartao.final) : ""}</option>`,
                `<option value="Boleto">Boleto</option>`
            ].join("");

            abrirModal(`
                <div class="payment-box">
                    <span class="eyebrow">CHECKOUT RC</span>
                    <h2 class="modal-title">Finalizar compra</h2>
                    <p class="modal-description">Escolha uma forma de pagamento. As formas salvas no seu perfil podem ser usadas sem preencher novamente os dados.</p>
                    <div class="payment-summary"><span>Subtotal</span><strong>${dinheiro(subtotal)}</strong></div><div class="payment-summary coupon-summary"><span>${cupomAtual ? "Cupom "+escaparHTML(cupomAtual.codigo) : "Desconto"}</span><strong>${desconto ? "- "+dinheiro(desconto) : dinheiro(0)}</strong></div><div class="payment-summary"><span>Total do pedido</span><strong>${dinheiro(total)}</strong></div>
                    <div class="checkout-coupon"><label class="payment-field-label">Cupom de desconto</label><div class="payment-link-row"><input id="checkoutCoupon" value="${cupomAtual ? escaparHTML(cupomAtual.codigo) : ""}" placeholder="Ex.: RC10"><button id="applyCheckoutCoupon" type="button">Aplicar</button></div></div>
                    <div class="payment-method-box">
                        <label class="payment-field-label">Forma de pagamento</label>
                        <select id="paymentMethod">${opcoesPagamento}</select>
                        <small>${pagamentosSalvos.cartao || pagamentosSalvos.pix ? "✓ Você possui formas de pagamento salvas neste perfil." : "Dica: salve PIX ou cartão no perfil para agilizar as próximas compras."}</small>
                    </div>
                    <div class="test-payment-card">
                        <div class="test-payment-badge">PAGAMENTO DE TESTE</div>
                        <div class="payment-qr-wrap"><img src="${qrPagamento}" alt="QR Code de pagamento de teste" class="payment-qr"></div>
                        <strong>Escaneie o QR Code</strong>
                        <small>ou copie o link abaixo para testar o fluxo.</small>
                        <div class="payment-link-row"><input id="paymentTestLink" readonly value="${escaparHTML(linkPagamentoTeste)}"><button id="copyPaymentLink" type="button">Copiar link</button></div>
                    </div>
                    <button id="confirmPurchase" class="primary full" type="button">Confirmar pedido de teste</button>
                </div>
            `);

            const applyCheckoutCoupon = document.getElementById("applyCheckoutCoupon");
            if (applyCheckoutCoupon) applyCheckoutCoupon.addEventListener("click", function(){ const code=document.getElementById("checkoutCoupon").value.trim(); if(aplicarCupom(code)){ fecharModal(); document.getElementById("checkoutButton").click(); } });

            const copyPaymentLink = document.getElementById("copyPaymentLink");
            if (copyPaymentLink) {
                copyPaymentLink.addEventListener("click", async function () {
                    const link = document.getElementById("paymentTestLink").value;
                    try {
                        await navigator.clipboard.writeText(link);
                        mostrarNotificacao("Link copiado", "O link de pagamento de teste foi copiado.");
                    } catch (erro) {
                        const campo = document.getElementById("paymentTestLink");
                        campo.select();
                        document.execCommand("copy");
                        mostrarNotificacao("Link copiado", "O link de pagamento de teste foi copiado.");
                    }
                });
            }

            document.getElementById("confirmPurchase").addEventListener("click", function () {
                const pedido = {
                    id: "RC" + Date.now().toString().slice(-8),
                    cliente: usuarioAtual.nome,
                    email: usuarioAtual.email,
                    itens: itens,
                    total: total,
                    pagamento: document.getElementById("paymentMethod").value,
                    pagamentoSalvo: document.getElementById("paymentMethod").value === "Cartão" && pagamentosSalvos.cartao
                        ? "Cartão •••• " + pagamentosSalvos.cartao.final
                        : document.getElementById("paymentMethod").value === "PIX" && pagamentosSalvos.pix
                            ? "PIX salvo"
                            : "Forma selecionada no checkout",
                    status: "Pendente",
                    data: new Date().toISOString()
                };

                itens.forEach(function (item) {
                    estoque[item.id] = Math.max(0, (estoque[item.id] || 0) - item.quantidade);
                });

                pedidos.push(pedido);
                adicionarNotificacao(usuarioAtual.email, "Pedido recebido", "O pedido #" + pedido.id + " foi registrado e está aguardando confirmação da equipe.", "info");
                carrinho = [];
                cupomAtual = null;
                localStorage.removeItem("mercadoRC_cupomAtual");
                salvarCarrinho();
                salvarEstoque();
                salvarPedidos();
                atualizarCarrinho();
                renderizarProdutos();
                fecharModal();
                mostrarNotificacao("Pedido registrado", "Pedido #" + pedido.id + " criado com sucesso.");
            });
        });
    }

    /* =========================
       INICIALIZAÇÃO
    ========================= */

    renderizarProdutos();

    atualizarCarrinho();

    atualizarBotaoLogin();
    atualizarSinoNotificacoes();

});