const authTitle =
    document.getElementById("authTitle");

const authDescription =
    document.getElementById("authDescription");

const authNameField =
    document.getElementById("authNameField");

const authName =
    document.getElementById("authName");

const authPassword =
    document.getElementById("authPassword");

const authSubmitButton =
    document.getElementById("authSubmitButton");

const authSwitchMessage =
    document.getElementById("authSwitchMessage");

const authSwitchButton =
    document.getElementById("authSwitchButton");

const forgotPasswordButton =
    document.getElementById("forgotPasswordButton");

const authForm =
    document.getElementById("authForm");

const authEmail =
    document.getElementById("authEmail");


let authMode = "login";


function updateAuthMode() {

    const isLogin =
        authMode === "login";


    authTitle.textContent =
        isLogin
            ? "Bem-vindo de volta"
            : "Crie sua conta";


    authDescription.textContent =
        isLogin
            ? "Entre na sua conta para continuar."
            : "Comece a organizar seus dias com o Volpine.";


    authNameField.classList.toggle(
        "hidden",
        isLogin
    );


    authName.required =
        !isLogin;


    authPassword.autocomplete =
        isLogin
            ? "current-password"
            : "new-password";


    forgotPasswordButton.classList.toggle(
        "hidden",
        !isLogin
    );


    authSubmitButton.textContent =
        isLogin
            ? "Entrar"
            : "Criar conta";


    authSwitchMessage.textContent =
        isLogin
            ? "Ainda não tem uma conta?"
            : "Já tem uma conta?";


    authSwitchButton.textContent =
        isLogin
            ? "Criar conta"
            : "Entrar";
}


authSwitchButton.addEventListener(
    "click",
    function () {

        authMode =
            authMode === "login"
                ? "signup"
                : "login";

        updateAuthMode();

    }
);


updateAuthMode();

forgotPasswordButton.addEventListener(
    "click",
    async function () {

        const email =
            authEmail.value.trim();


        if (!email) {

            alert(
                "Digite seu e-mail primeiro para recuperar sua senha."
            );

            authEmail.focus();

            return;
        }


        forgotPasswordButton.disabled = true;
        forgotPasswordButton.textContent =
            "Enviando...";


        const { error } =
            await supabaseClient.auth.resetPasswordForEmail(
                email,
                {
                    redirectTo:
                        "https://daphinemota.github.io/Volpine/reset-password.html"
                }
            );


        forgotPasswordButton.disabled = false;
        forgotPasswordButton.textContent =
            "Esqueci minha senha";


        if (error) {

            alert(
                "Não foi possível enviar o e-mail: " +
                error.message
            );

            return;
        }


        alert(
            "Enviamos um link de recuperação para o seu e-mail."
        );

    }
);

authForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const email =
            authEmail.value.trim();

        const password =
            authPassword.value;

        const name =
            authName.value.trim();


        if (authMode === "signup") {

            authSubmitButton.disabled = true;
            authSubmitButton.textContent = "Criando conta...";


            const { data, error } =
                await supabaseClient.auth.signUp({
                    email: email,
                    password: password,

                    options: {
                        data: {
                            name: name
                        }
                    }
                });


            if (error) {

                alert(
                    "Não foi possível criar sua conta: " +
                    error.message
                );

                authSubmitButton.disabled = false;
                authSubmitButton.textContent = "Criar conta";

                return;
            }


            alert(
                "Conta criada! Confira seu e-mail para confirmar o cadastro."
            );


            authMode = "login";

            updateAuthMode();

            authForm.reset();

            return;
        }


        authSubmitButton.disabled = true;
        authSubmitButton.textContent = "Entrando...";


        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });


        if (error) {

            alert(
                "Não foi possível entrar: " +
                error.message
            );

            authSubmitButton.disabled = false;
            authSubmitButton.textContent = "Entrar";

            return;
        }


        window.location.href = "index.html";

    }
);