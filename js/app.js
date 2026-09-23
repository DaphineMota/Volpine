const APP_VERSION = "1.0.0";


// =====================================
// ELEMENTOS - AGENDA
// =====================================

const itemForm =
    document.getElementById("itemForm");

const itemTitle =
    document.getElementById("itemTitle");

const taskFields =
    document.getElementById("taskFields");

const taskStart =
    document.getElementById("taskStart");

const taskDeadline =
    document.getElementById("taskDeadline");

const reminderFields =
    document.getElementById("reminderFields");

const reminderDate =
    document.getElementById("reminderDate");

const submitItemButton =
    document.getElementById("submitItemButton");

const itemList =
    document.getElementById("itemList");

const emptyMessage =
    document.getElementById("emptyMessage");

const agendaSection =
    document.getElementById("agendaSection");

const filterButtons =
    document.querySelectorAll(".filter-button");

let currentFilter = "all";


// =====================================
// NOVO ITEM
// =====================================

const typeTaskButton =
    document.getElementById("typeTaskButton");

const typeReminderButton =
    document.getElementById("typeReminderButton");

const openNewItem =
    document.getElementById("openNewItem");

const itemModal =
    document.getElementById("itemModal");

const closeItemModal =
    document.getElementById("closeItemModal");

let newItemType = "task";


// =====================================
// SIDEBAR
// =====================================

const navHome =
    document.getElementById("navHome");

const navAgenda =
    document.getElementById("navAgenda");

const navTasks =
    document.getElementById("navTasks");

const navReminders =
    document.getElementById("navReminders");

const sidebarButtons =
    document.querySelectorAll(".nav-item");


// =====================================
// PROGRESSO
// =====================================

const progressCard =
    document.getElementById("progressCard");

const progressText =
    document.getElementById("progressText");

const progressPercent =
    document.getElementById("progressPercent");

const progressFill =
    document.getElementById("progressFill");

const progressMessage =
    document.getElementById("progressMessage");
let lastProgress = null;


// =====================================
// DATA
// =====================================

const todayDate =
    document.getElementById("todayDate");

const sideDate =
    document.getElementById("sideDate");


// =====================================
// CALENDÁRIO
// =====================================

const calendarButton =
    document.getElementById("calendarButton");

const sideCalendarButton =
    document.getElementById("sideCalendarButton");

const calendarModal =
    document.getElementById("calendarModal");

const closeCalendar =
    document.getElementById("closeCalendar");

const prevMonth =
    document.getElementById("prevMonth");

const nextMonth =
    document.getElementById("nextMonth");

const calendarTitle =
    document.getElementById("calendarTitle");

const calendarGrid =
    document.getElementById("calendarGrid");

const selectedDayTitle =
    document.getElementById("selectedDayTitle");

const selectedDayItems =
    document.getElementById("selectedDayItems");

let calendarDate = new Date();

calendarDate.setDate(1);


// =====================================
// EXCLUSÃO
// =====================================

const deleteModal =
    document.getElementById("deleteModal");

const deleteMessage =
    document.getElementById("deleteMessage");

const cancelDelete =
    document.getElementById("cancelDelete");

const confirmDelete =
    document.getElementById("confirmDelete");

let pendingDeleteItem = null;


// =====================================
// CONFIGURAÇÕES
// =====================================

const settingsButton =
    document.getElementById("settingsButton");

const settingsModal =
    document.getElementById("settingsModal");

const closeSettings =
    document.getElementById("closeSettings");

const settingsTabs =
    document.querySelectorAll(".settings-tab");

const settingsPanels =
    document.querySelectorAll(".settings-panel");

const settingWelcome =
    document.getElementById("settingWelcome");

const settingAnimations =
    document.getElementById("settingAnimations");

const settingCompact =
    document.getElementById("settingCompact");

const resetSettings =
    document.getElementById("resetSettings");

const welcomeCard =
    document.getElementById("welcomeCard");

    // =====================================
// BANNERS
// =====================================

const bannerCurrent =
    document.getElementById("bannerCurrent");

const bannerNext =
    document.getElementById("bannerNext");


const bannerImages = {

    light: {

        morning:
            "assets/images/banner-light-morning.png",

        afternoon:
            "assets/images/banner-light-afternoon.png",

        night:
            "assets/images/banner-light-night.png"

    },

    dark: {

        morning:
            "assets/images/banner-dark-morning.png",

        afternoon:
            "assets/images/banner-dark-afternoon.png",

        night:
            "assets/images/banner-dark-night.png"

    }

};

function getBannerPeriod() {

    const hour =
        new Date().getHours();


    if (
        hour >= 5 &&
        hour < 12
    ) {

        return "morning";

    }


    if (
        hour >= 12 &&
        hour < 18
    ) {

        return "afternoon";

    }


    return "night";

}

function getBannerTheme() {

    const isDark =
        document.body.classList.contains(
            "theme-dark"
        );

    return isDark
        ? "dark"
        : "light";

}

function getCurrentBannerImage() {

    const theme =
        getBannerTheme();

    const period =
        getBannerPeriod();


    return bannerImages
        [theme]
        [period];

}

function changeBannerImage(newImage) {

    const currentImage =
        bannerCurrent.getAttribute("src");


    // Se já estiver usando a imagem correta,
    // não precisa fazer nada.
    if (
        currentImage === newImage
    ) {

        return;

    }


    // Carrega a nova imagem antes da troca
    // para evitar piscar ou aparecer fundo vazio.
    const preloader =
        new Image();


    preloader.src =
        newImage;


    preloader.onload =
        function () {

            // Se o usuário desativou as animações,
            // troca imediatamente.
            if (
                !settings.animations
            ) {

                bannerCurrent.src =
                    newImage;

                bannerNext.classList.remove(
                    "banner-visible"
                );

                return;

            }


            // Coloca a nova imagem na camada de cima.
            bannerNext.src =
                newImage;


            // Faz ela aparecer suavemente.
            bannerNext.classList.add(
                "banner-visible"
            );


            // Depois do crossfade,
            // transforma a nova imagem na imagem principal.
            setTimeout(
                function () {

                    bannerCurrent.src =
                        newImage;


                    bannerNext.classList.remove(
                        "banner-visible"
                    );


                    bannerNext.removeAttribute(
                        "src"
                    );

                },
                1000
            );

        };

}

function updateBanner() {

    const correctImage =
        getCurrentBannerImage();

    changeBannerImage(
        correctImage
    );

}



const themeButtons =
    document.querySelectorAll(".theme-option");


// =====================================
// PERFIL
// =====================================

const profileButton =
    document.getElementById("profileButton");

const headerAvatarImage =
    document.getElementById("headerAvatarImage");

const headerAvatarInitial =
    document.getElementById("headerAvatarInitial");

const headerProfileName =
    document.getElementById("headerProfileName");

const headerProfileUsername =
    document.getElementById("headerProfileUsername");

const profileAvatarImage =
    document.getElementById("profileAvatarImage");

const profileAvatarInitial =
    document.getElementById("profileAvatarInitial");

const profilePhotoInput =
    document.getElementById("profilePhotoInput");

const removeProfilePhoto =
    document.getElementById("removeProfilePhoto");

const profileName =
    document.getElementById("profileName");

const profileUsername =
    document.getElementById("profileUsername");

const saveProfile =
    document.getElementById("saveProfile");

const accountAvatarImage =
    document.getElementById("accountAvatarImage");

const accountAvatarInitial =
    document.getElementById("accountAvatarInitial");

const accountName =
    document.getElementById("accountName");

const accountUsername =
    document.getElementById("accountUsername");

let pendingProfilePhoto = "";


// =====================================
// CONTA
// =====================================

const changePasswordButton =
    document.getElementById("changePasswordButton");

const switchAccountButton =
    document.getElementById("switchAccountButton");

const logoutButton =
    document.getElementById("logoutButton");


// =====================================
// VERSÃO
// =====================================

const sidebarVersion =
    document.getElementById("sidebarVersion");

const settingsVersion =
    document.getElementById("settingsVersion");


// =====================================
// TOAST
// =====================================

const toast =
    document.getElementById("toast");

let toastTimer;


// =====================================
// DADOS
// =====================================

let items =
    JSON.parse(
        localStorage.getItem("volpineItems")
    ) || [];


const defaultSettings = {
    theme: "light",
    showWelcome: true,
    animations: true,
    compact: false
};


let settings = {
    ...defaultSettings,
    ...(
        JSON.parse(
            localStorage.getItem("volpineSettings")
        ) || {}
    )
};


const defaultProfile = {
    name: "Visitante",
    username: "",
    photo: ""
};


let profile = {
    ...defaultProfile,
    ...(
        JSON.parse(
            localStorage.getItem("volpineProfile")
        ) || {}
    )
};


pendingProfilePhoto =
    profile.photo;


// =====================================
// SALVAR
// =====================================

function saveItems() {

    localStorage.setItem(
        "volpineItems",
        JSON.stringify(items)
    );

}


function saveSettings() {

    localStorage.setItem(
        "volpineSettings",
        JSON.stringify(settings)
    );

}


function saveProfileData() {

    localStorage.setItem(
        "volpineProfile",
        JSON.stringify(profile)
    );

}


// =====================================
// TOAST
// =====================================

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove("show");

            },
            2800
        );

}


// =====================================
// VERSÃO
// =====================================

function showVersion() {

    sidebarVersion.textContent =
        "Volpine v" + APP_VERSION;

    settingsVersion.textContent =
        APP_VERSION;

}


// =====================================
// TEMA
// =====================================

function isSystemDark() {

    return window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

}


function applyTheme() {

    let dark = false;


    if (
        settings.theme === "dark"
    ) {

        dark = true;

    }


    if (
        settings.theme === "system"
    ) {

        dark =
            isSystemDark();

    }


    document.body.classList.toggle(
        "theme-dark",
        dark
    );


    themeButtons.forEach(
        function (button) {

            button.classList.toggle(
                "active",
                button.dataset.theme ===
                    settings.theme
            );

        }
    );

}


themeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                settings.theme =
                    button.dataset.theme;

                saveSettings();

                applyTheme();

            }
        );

    }
);


window
    .matchMedia(
        "(prefers-color-scheme: dark)"
    )
    .addEventListener(
        "change",
        function () {

            if (
                settings.theme ===
                "system"
            ) {

                applyTheme();

            }

        }
    );


// =====================================
// OUTRAS CONFIGURAÇÕES
// =====================================

function applySettings() {

    settingWelcome.checked =
        settings.showWelcome;

    settingAnimations.checked =
        settings.animations;

    settingCompact.checked =
        settings.compact;


    welcomeCard.classList.toggle(
        "setting-hidden",
        !settings.showWelcome
    );


    document.body.classList.toggle(
        "animations-off",
        !settings.animations
    );


    document.body.classList.toggle(
        "compact-mode",
        settings.compact
    );


    applyTheme();

}


settingWelcome.addEventListener(
    "change",
    function () {

        settings.showWelcome =
            settingWelcome.checked;

        saveSettings();

        applySettings();

    }
);


settingAnimations.addEventListener(
    "change",
    function () {

        settings.animations =
            settingAnimations.checked;

        saveSettings();

        applySettings();

    }
);


settingCompact.addEventListener(
    "change",
    function () {

        settings.compact =
            settingCompact.checked;

        saveSettings();

        applySettings();

    }
);


resetSettings.addEventListener(
    "click",
    function () {

        settings = {
            ...defaultSettings
        };

        saveSettings();

        applySettings();

        showToast(
            "Configurações restauradas."
        );

    }
);


// =====================================
// PERFIL
// =====================================

function getProfileInitial() {

    const name =
        profile.name.trim();


    if (
        name === ""
    ) {

        return "V";

    }


    return name
        .charAt(0)
        .toUpperCase();

}


function setAvatar(
    imageElement,
    initialElement,
    photo,
    initial
) {

    if (
        photo
    ) {

        imageElement.src =
            photo;

        imageElement.classList.remove(
            "hidden"
        );

        initialElement.classList.add(
            "hidden"
        );

    } else {

        imageElement.removeAttribute(
            "src"
        );

        imageElement.classList.add(
            "hidden"
        );

        initialElement.classList.remove(
            "hidden"
        );

        initialElement.textContent =
            initial;

    }

}


function renderProfile() {

    const initial =
        getProfileInitial();


    headerProfileName.textContent =
        profile.name ||
        "Visitante";


    if (
        profile.username
    ) {

        headerProfileUsername.textContent =
            "@" + profile.username;

        accountUsername.textContent =
            "@" + profile.username;

    } else {

        headerProfileUsername.textContent =
            "Perfil local";

        accountUsername.textContent =
            "Perfil local";

    }


    accountName.textContent =
        profile.name ||
        "Visitante";


    profileName.value =
        profile.name === "Visitante"
            ? ""
            : profile.name;


    profileUsername.value =
        profile.username;


    pendingProfilePhoto =
        profile.photo;


    setAvatar(
        headerAvatarImage,
        headerAvatarInitial,
        profile.photo,
        initial
    );


    setAvatar(
        profileAvatarImage,
        profileAvatarInitial,
        profile.photo,
        initial
    );


    setAvatar(
        accountAvatarImage,
        accountAvatarInitial,
        profile.photo,
        initial
    );

}


// =====================================
// FOTO DE PERFIL
// =====================================

function resizeProfileImage(file) {

    return new Promise(
        function (resolve, reject) {

            const reader =
                new FileReader();


            reader.onload =
                function () {

                    const image =
                        new Image();


                    image.onload =
                        function () {

                            const size =
                                256;


                            const canvas =
                                document.createElement(
                                    "canvas"
                                );


                            canvas.width =
                                size;

                            canvas.height =
                                size;


                            const context =
                                canvas.getContext(
                                    "2d"
                                );


                            const cropSize =
                                Math.min(
                                    image.width,
                                    image.height
                                );


                            const sx =
                                (
                                    image.width -
                                    cropSize
                                ) / 2;


                            const sy =
                                (
                                    image.height -
                                    cropSize
                                ) / 2;


                            context.drawImage(
                                image,
                                sx,
                                sy,
                                cropSize,
                                cropSize,
                                0,
                                0,
                                size,
                                size
                            );


                            resolve(
                                canvas.toDataURL(
                                    "image/jpeg",
                                    0.82
                                )
                            );

                        };


                    image.onerror =
                        reject;


                    image.src =
                        reader.result;

                };


            reader.onerror =
                reject;


            reader.readAsDataURL(
                file
            );

        }
    );

}


profilePhotoInput.addEventListener(
    "change",
    async function () {

        const file =
            profilePhotoInput.files[0];


        if (
            !file
        ) {

            return;

        }


        if (
            !file.type.startsWith(
                "image/"
            )
        ) {

            showToast(
                "Escolha um arquivo de imagem."
            );

            return;

        }


        try {

            pendingProfilePhoto =
                await resizeProfileImage(
                    file
                );


            const initial =
                getProfileInitial();


            setAvatar(
                profileAvatarImage,
                profileAvatarInitial,
                pendingProfilePhoto,
                initial
            );


            showToast(
                "Foto selecionada. Salve o perfil para confirmar."
            );

        } catch {

            showToast(
                "Não foi possível carregar essa imagem."
            );

        }

    }
);


removeProfilePhoto.addEventListener(
    "click",
    function () {

        pendingProfilePhoto = "";


        setAvatar(
            profileAvatarImage,
            profileAvatarInitial,
            "",
            getProfileInitial()
        );

    }
);


// =====================================
// SALVAR PERFIL
// =====================================

saveProfile.addEventListener(
    "click",
    function () {

        const name =
            profileName.value.trim();


        let username =
            profileUsername.value
                .trim()
                .replace(/^@/, "");


        if (
            name === ""
        ) {

            showToast(
                "Digite seu nome."
            );

            return;

        }


        if (
            username !== "" &&
            !/^[a-zA-Z0-9._-]{3,20}$/.test(
                username
            )
        ) {

            showToast(
                "O nome de usuário deve ter de 3 a 20 caracteres e não pode conter espaços."
            );

            return;

        }


        profile = {
            name: name,
            username: username,
            photo:
                pendingProfilePhoto
        };


        saveProfileData();

        renderProfile();


        showToast(
            "Perfil atualizado."
        );

    }
);


// =====================================
// CONFIGURAÇÕES - ABRIR
// =====================================

function openSettings(
    panel = "profile"
) {

    settingsModal.classList.remove(
        "hidden"
    );

    selectSettingsPanel(
        panel
    );

}


function closeSettingsModal() {

    settingsModal.classList.add(
        "hidden"
    );

}


settingsButton.addEventListener(
    "click",
    function () {

        openSettings(
            "appearance"
        );

    }
);


profileButton.addEventListener(
    "click",
    function () {

        openSettings(
            "profile"
        );

    }
);


closeSettings.addEventListener(
    "click",
    closeSettingsModal
);


settingsModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            settingsModal
        ) {

            closeSettingsModal();

        }

    }
);


// =====================================
// ABAS CONFIGURAÇÕES
// =====================================

function selectSettingsPanel(
    panelName
) {

    settingsTabs.forEach(
        function (tab) {

            tab.classList.toggle(
                "active",
                tab.dataset.settings ===
                    panelName
            );

        }
    );


    settingsPanels.forEach(
        function (panel) {

            panel.classList.toggle(
                "hidden",
                panel.id !==
                    "settings-" +
                    panelName
            );

        }
    );

}


settingsTabs.forEach(
    function (tab) {

        tab.addEventListener(
            "click",
            function () {

                selectSettingsPanel(
                    tab.dataset.settings
                );

            }
        );

    }
);


// =====================================
// CONTA - AINDA VISUAL
// =====================================

function authComingSoon() {

    showToast(
        "Essa opção será ativada quando conectarmos o sistema de login."
    );

}


changePasswordButton.addEventListener(
    "click",
    authComingSoon
);


switchAccountButton.addEventListener(
    "click",
    authComingSoon
);


logoutButton.addEventListener(
    "click",
    authComingSoon
);


// =====================================
// FORMATAR DATAS
// =====================================

function formatDate(date) {

    return new Date(
        date
    ).toLocaleString(
        "pt-BR",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


function formatTime(date) {

    return new Date(
        date
    ).toLocaleTimeString(
        "pt-BR",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


// =====================================
// HOJE
// =====================================

function showTodayDate() {

    const today =
        new Date();


    todayDate.textContent =
        today.toLocaleDateString(
            "pt-BR",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    sideDate.textContent =
        today.toLocaleDateString(
            "pt-BR",
            {
                day: "numeric",
                month: "long"
            }
        );

}


// =====================================
// NOVO ITEM - TIPO
// =====================================

function setNewItemType(type) {

    newItemType =
        type;


    const isTask =
        type === "task";


    typeTaskButton.classList.toggle(
        "active",
        isTask
    );


    typeReminderButton.classList.toggle(
        "active",
        !isTask
    );


    taskFields.classList.toggle(
        "hidden",
        !isTask
    );


    reminderFields.classList.toggle(
        "hidden",
        isTask
    );


    submitItemButton.textContent =
        isTask
            ? "Criar tarefa"
            : "Criar lembrete";

}


typeTaskButton.addEventListener(
    "click",
    function () {

        setNewItemType(
            "task"
        );

    }
);


typeReminderButton.addEventListener(
    "click",
    function () {

        setNewItemType(
            "reminder"
        );

    }
);


// =====================================
// MODAL NOVO ITEM
// =====================================

function openItemModal() {

    if (
        currentFilter ===
            "task" ||
        currentFilter ===
            "reminder"
    ) {

        setNewItemType(
            currentFilter
        );

    } else {

        setNewItemType(
            "task"
        );

    }


    itemModal.classList.remove(
        "hidden"
    );


    itemTitle.focus();

}


function closeNewItemModal() {

    itemModal.classList.add(
        "hidden"
    );

}


openNewItem.addEventListener(
    "click",
    openItemModal
);


closeItemModal.addEventListener(
    "click",
    closeNewItemModal
);


itemModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            itemModal
        ) {

            closeNewItemModal();

        }

    }
);


// =====================================
// FILTROS
// =====================================

function activateSidebar(
    button
) {

    sidebarButtons.forEach(
        function (
            sidebarButton
        ) {

            sidebarButton.classList.remove(
                "active"
            );

        }
    );


    button.classList.add(
        "active"
    );

}


function updateFilterButtons() {

    filterButtons.forEach(
        function (button) {

            button.classList.toggle(
                "active",
                button.dataset.filter ===
                    currentFilter
            );

        }
    );

}


function setFilter(
    filter,
    sidebarButton
) {

    currentFilter =
        filter;


    updateFilterButtons();

    activateSidebar(
        sidebarButton
    );

    showItems();

}


function scrollToAgenda() {

    agendaSection.scrollIntoView({
        behavior:
            settings.animations
                ? "smooth"
                : "auto"
    });

}


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                if (
                    button.dataset.filter ===
                    "all"
                ) {

                    setFilter(
                        "all",
                        navAgenda
                    );

                } else if (
                    button.dataset.filter ===
                    "task"
                ) {

                    setFilter(
                        "task",
                        navTasks
                    );

                } else {

                    setFilter(
                        "reminder",
                        navReminders
                    );

                }

            }
        );

    }
);


navHome.addEventListener(
    "click",
    function () {

        currentFilter =
            "all";

        updateFilterButtons();

        activateSidebar(
            navHome
        );

        showItems();


        window.scrollTo({
            top: 0,
            behavior:
                settings.animations
                    ? "smooth"
                    : "auto"
        });

    }
);


navAgenda.addEventListener(
    "click",
    function () {

        setFilter(
            "all",
            navAgenda
        );

        scrollToAgenda();

    }
);


navTasks.addEventListener(
    "click",
    function () {

        setFilter(
            "task",
            navTasks
        );

        scrollToAgenda();

    }
);


navReminders.addEventListener(
    "click",
    function () {

        setFilter(
            "reminder",
            navReminders
        );

        scrollToAgenda();

    }
);


// =====================================
// MOSTRAR ITENS
// =====================================

function showItems() {

    itemList.innerHTML = "";


    const filteredItems =
        items.filter(
            function (item) {

                return (
                    currentFilter ===
                    "all" ||
                    item.type ===
                    currentFilter
                );

            }
        );


    filteredItems.sort(
        function (a, b) {

            const dateA =
                a.type === "task"
                    ? new Date(
                        a.start
                    )
                    : new Date(
                        a.datetime
                    );


            const dateB =
                b.type === "task"
                    ? new Date(
                        b.start
                    )
                    : new Date(
                        b.datetime
                    );


            return dateA - dateB;

        }
    );


    if (
        filteredItems.length === 0
    ) {

        emptyMessage.classList.remove(
            "hidden"
        );


        if (
            currentFilter === "task"
        ) {

            emptyMessage.textContent =
                "Nenhuma tarefa adicionada.";

        } else if (
            currentFilter ===
            "reminder"
        ) {

            emptyMessage.textContent =
                "Nenhum lembrete adicionado.";

        } else {

            emptyMessage.textContent =
                "Nenhum item adicionado ainda.";

        }


        return;

    }


    emptyMessage.classList.add(
        "hidden"
    );


    filteredItems.forEach(
        function (item) {

            const li =
                document.createElement(
                    "li"
                );


            li.classList.add(
                "agenda-item"
            );


            if (
                item.type ===
                "reminder"
            ) {

                li.classList.add(
                    "reminder"
                );

            }


            if (
                item.completed
            ) {

                li.classList.add(
                    "completed"
                );

            }


            const type =
                document.createElement(
                    "span"
                );


            type.classList.add(
                "item-type"
            );


            type.textContent =
                item.type === "task"
                    ? "Tarefa"
                    : "Lembrete";


            const title =
                document.createElement(
                    "span"
                );


            title.classList.add(
                "item-title"
            );


            title.textContent =
                item.title;


            li.appendChild(type);

            li.appendChild(title);


            if (
                item.type === "task"
            ) {

                const start =
                    document.createElement(
                        "span"
                    );


                start.classList.add(
                    "item-info"
                );


                start.textContent =
                    "▷ Início: " +
                    formatDate(
                        item.start
                    );


                const deadline =
                    document.createElement(
                        "span"
                    );


                deadline.classList.add(
                    "item-info"
                );


                deadline.textContent =
                    "⚑ Prazo: " +
                    formatDate(
                        item.deadline
                    );


                li.appendChild(start);

                li.appendChild(
                    deadline
                );

            } else {

                const reminder =
                    document.createElement(
                        "span"
                    );


                reminder.classList.add(
                    "item-info"
                );


                reminder.textContent =
                    "◷ " +
                    formatDate(
                        item.datetime
                    );


                li.appendChild(
                    reminder
                );

            }


            const actions =
                document.createElement(
                    "div"
                );


            actions.classList.add(
                "item-actions"
            );


            if (
                item.type === "task"
            ) {

                const completeButton =
                    document.createElement(
                        "button"
                    );


                completeButton.classList.add(
                    "complete-button"
                );


                completeButton.textContent =
                    item.completed
                        ? "Desfazer"
                        : "✓ Concluir";


                completeButton.addEventListener(
                    "click",
                    function () {

                        item.completed =
                            !item.completed;


                        saveItems();

                        showItems();

                        updateProgress(
                            true
                        );

                        renderCalendar();

                    }
                );


                actions.appendChild(
                    completeButton
                );

            }


            const removeButton =
                document.createElement(
                    "button"
                );


            removeButton.classList.add(
                "delete-button"
            );


            removeButton.textContent =
                "Remover";


            removeButton.addEventListener(
                "click",
                function () {

                    askDelete(
                        item
                    );

                }
            );


            actions.appendChild(
                removeButton
            );


            li.appendChild(
                actions
            );


            itemList.appendChild(
                li
            );

        }
    );

}


// =====================================
// CRIAR ITEM
// =====================================

itemForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const title =
            itemTitle.value.trim();


        if (
            title === ""
        ) {

            showToast(
                "Digite um título."
            );

            return;

        }


        if (
            newItemType === "task"
        ) {

            if (
                taskStart.value === "" ||
                taskDeadline.value === ""
            ) {

                showToast(
                    "Escolha o início e o prazo da tarefa."
                );

                return;

            }


            if (
                new Date(
                    taskDeadline.value
                ) <=
                new Date(
                    taskStart.value
                )
            ) {

                showToast(
                    "O prazo deve ser depois do início."
                );

                return;

            }


            items.push({
                id: Date.now(),
                type: "task",
                title: title,
                start: taskStart.value,
                deadline:
                    taskDeadline.value,
                completed: false
            });

        } else {

            if (
                reminderDate.value === ""
            ) {

                showToast(
                    "Escolha a data e horário do lembrete."
                );

                return;

            }


            items.push({
                id: Date.now(),
                type: "reminder",
                title: title,
                datetime:
                    reminderDate.value
            });

        }


        saveItems();

        showItems();

        updateProgress(false);

        renderCalendar();


        itemTitle.value = "";

        taskStart.value = "";

        taskDeadline.value = "";

        reminderDate.value = "";


        setNewItemType(
            "task"
        );


        closeNewItemModal();

    }
);


// =====================================
// EXCLUSÃO
// =====================================

function askDelete(item) {

    pendingDeleteItem =
        item;


    deleteMessage.textContent =
        item.type === "task"
            ? 'Deseja realmente excluir esta tarefa: "' +
              item.title +
              '"?'
            : 'Deseja realmente excluir este lembrete: "' +
              item.title +
              '"?';


    deleteModal.classList.remove(
        "hidden"
    );

}


function closeDeleteModal() {

    pendingDeleteItem =
        null;


    deleteModal.classList.add(
        "hidden"
    );

}


cancelDelete.addEventListener(
    "click",
    closeDeleteModal
);


confirmDelete.addEventListener(
    "click",
    function () {

        if (
            !pendingDeleteItem
        ) {

            return;

        }


        const itemId =
            pendingDeleteItem.id;


        items =
            items.filter(
                function (item) {

                    return (
                        item.id !==
                        itemId
                    );

                }
            );


        saveItems();

        closeDeleteModal();

        showItems();

        updateProgress(false);

        renderCalendar();

    }
);


// =====================================
// PROGRESSO
// =====================================

function updateProgress(
    allowCelebration = false
) {

    const tasks =
        items.filter(
            function (item) {

                return (
                    item.type ===
                    "task"
                );

            }
        );


    const completed =
        tasks.filter(
            function (item) {

                return (
                    item.completed
                );

            }
        ).length;


    const total =
        tasks.length;


    const percentage =
        total === 0
            ? 0
            : Math.round(
                (
                    completed /
                    total
                ) * 100
            );


    progressText.textContent =
        completed +
        " de " +
        total +
        " tarefas concluídas";


    progressPercent.textContent =
        percentage + "%";


    progressFill.style.width =
        percentage + "%";


    if (
        allowCelebration &&
        percentage === 100 &&
        lastProgress !== 100 &&
        total > 0 &&
        settings.animations
    ) {

        celebrateCompletion();

    }


    lastProgress =
        percentage;

}


// =====================================
// CONFETE
// =====================================

function celebrateCompletion() {

    progressCard.classList.remove(
        "progress-celebrate"
    );


    void progressCard.offsetWidth;


    progressCard.classList.add(
        "progress-celebrate"
    );


    const layer =
        document.createElement(
            "div"
        );


    layer.classList.add(
        "confetti-layer"
    );


    const colors = [
        "#bd5f40",
        "#efc5b5",
        "#f0b2a8",
        "#d68b67",
        "#94452f",
        "#f3d7c9"
    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.classList.add(
            "confetti-piece"
        );


        piece.style.left =
            Math.random() *
            100 +
            "%";


        piece.style.backgroundColor =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDelay =
            Math.random() *
            0.5 +
            "s";


        layer.appendChild(
            piece
        );

    }


    document.body.appendChild(
        layer
    );


    setTimeout(
        function () {

            layer.remove();

        },
        3000
    );

}


// =====================================
// CALENDÁRIO
// =====================================

function openCalendar() {

    calendarModal.classList.remove(
        "hidden"
    );


    renderCalendar();

}


calendarButton.addEventListener(
    "click",
    openCalendar
);


sideCalendarButton.addEventListener(
    "click",
    openCalendar
);


closeCalendar.addEventListener(
    "click",
    function () {

        calendarModal.classList.add(
            "hidden"
        );

    }
);


prevMonth.addEventListener(
    "click",
    function () {

        calendarDate.setMonth(
            calendarDate.getMonth() - 1
        );


        renderCalendar();

    }
);


nextMonth.addEventListener(
    "click",
    function () {

        calendarDate.setMonth(
            calendarDate.getMonth() + 1
        );


        renderCalendar();

    }
);


// =====================================
// ITENS DE UM DIA
// =====================================

function getItemsForDay(
    year,
    month,
    day
) {

    const dayItems = [];


    items.forEach(
        function (item) {

            if (
                item.type ===
                "reminder"
            ) {

                const date =
                    new Date(
                        item.datetime
                    );


                if (
                    date.getFullYear() ===
                        year &&
                    date.getMonth() ===
                        month &&
                    date.getDate() ===
                        day
                ) {

                    dayItems.push({
                        title:
                            item.title,
                        datetime:
                            item.datetime,
                        label:
                            "Lembrete"
                    });

                }

            }


            if (
                item.type ===
                "task"
            ) {

                const start =
                    new Date(
                        item.start
                    );


                const deadline =
                    new Date(
                        item.deadline
                    );


                if (
                    start.getFullYear() ===
                        year &&
                    start.getMonth() ===
                        month &&
                    start.getDate() ===
                        day
                ) {

                    dayItems.push({
                        title:
                            item.title,
                        datetime:
                            item.start,
                        label:
                            "Início"
                    });

                }


                if (
                    deadline.getFullYear() ===
                        year &&
                    deadline.getMonth() ===
                        month &&
                    deadline.getDate() ===
                        day
                ) {

                    dayItems.push({
                        title:
                            item.title,
                        datetime:
                            item.deadline,
                        label:
                            "Prazo"
                    });

                }

            }

        }
    );


    return dayItems.sort(
        function (a, b) {

            return (
                new Date(
                    a.datetime
                ) -
                new Date(
                    b.datetime
                )
            );

        }
    );

}


// =====================================
// DETALHES DO DIA
// =====================================

function showDayDetails(
    year,
    month,
    day
) {

    const selectedDate =
        new Date(
            year,
            month,
            day
        );


    selectedDayTitle.textContent =
        selectedDate.toLocaleDateString(
            "pt-BR",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    selectedDayItems.innerHTML =
        "";


    const dayItems =
        getItemsForDay(
            year,
            month,
            day
        );


    if (
        dayItems.length === 0
    ) {

        selectedDayItems.innerHTML =
            `
            <p class="day-placeholder">
                Nenhum item para este dia.
            </p>
            `;

        return;

    }


    dayItems.forEach(
        function (item) {

            const div =
                document.createElement(
                    "div"
                );


            div.classList.add(
                "day-item"
            );


            div.innerHTML =
                `
                <strong>
                    ${item.title}
                </strong>

                <span>
                    ${item.label}
                    •
                    ${formatTime(item.datetime)}
                </span>
                `;


            selectedDayItems.appendChild(
                div
            );

        }
    );

}


// =====================================
// RENDER CALENDÁRIO
// =====================================

function renderCalendar() {

    calendarGrid.innerHTML =
        "";


    const year =
        calendarDate.getFullYear();


    const month =
        calendarDate.getMonth();


    calendarTitle.textContent =
        calendarDate.toLocaleDateString(
            "pt-BR",
            {
                month: "long",
                year: "numeric"
            }
        );


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const empty =
            document.createElement(
                "div"
            );


        empty.classList.add(
            "calendar-empty"
        );


        calendarGrid.appendChild(
            empty
        );

    }


    const today =
        new Date();


    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayButton =
            document.createElement(
                "button"
            );


        dayButton.type =
            "button";


        dayButton.classList.add(
            "calendar-day"
        );


        dayButton.textContent =
            day;


        if (
            today.getFullYear() ===
                year &&
            today.getMonth() ===
                month &&
            today.getDate() ===
                day
        ) {

            dayButton.classList.add(
                "today"
            );

        }


        if (
            getItemsForDay(
                year,
                month,
                day
            ).length > 0
        ) {

            dayButton.classList.add(
                "has-items"
            );

        }


        dayButton.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".calendar-day"
                    )
                    .forEach(
                        function (
                            button
                        ) {

                            button.classList.remove(
                                "selected"
                            );

                        }
                    );


                dayButton.classList.add(
                    "selected"
                );


                showDayDetails(
                    year,
                    month,
                    day
                );

            }
        );


        calendarGrid.appendChild(
            dayButton
        );

    }


    selectedDayTitle.textContent =
        "Selecione um dia";


    selectedDayItems.innerHTML =
        `
        <p class="day-placeholder">
            Clique em uma data para visualizar os itens.
        </p>
        `;

}


// =====================================
// FECHAR AO CLICAR FORA
// =====================================

calendarModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            calendarModal
        ) {

            calendarModal.classList.add(
                "hidden"
            );

        }

    }
);


deleteModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            deleteModal
        ) {

            closeDeleteModal();

        }

    }
);


// =====================================
// ESC
// =====================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        itemModal.classList.add(
            "hidden"
        );


        calendarModal.classList.add(
            "hidden"
        );


        settingsModal.classList.add(
            "hidden"
        );


        closeDeleteModal();

    }
);


// =====================================
// INICIAR
// =====================================

showVersion();

applySettings();

updateBanner();

renderProfile();

showTodayDate();

showItems();

updateProgress(false);

renderCalendar();