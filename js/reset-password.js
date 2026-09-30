const resetPasswordForm =
    document.getElementById("resetPasswordForm");

const newPassword =
    document.getElementById("newPassword");

const confirmNewPassword =
    document.getElementById("confirmNewPassword");

const resetPasswordButton =
    document.getElementById("resetPasswordButton");


resetPasswordForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const password =
            newPassword.value;

        const confirmation =
            confirmNewPassword.value;


        if (password !== confirmation) {

            alert(
                "As senhas não são iguais."
            );

            return;
        }


        if (password.length < 6) {

            alert(
                "A senha precisa ter pelo menos 6 caracteres."
            );

            return;
        }


        resetPasswordButton.disabled = true;
        resetPasswordButton.textContent =
            "Salvando...";


        const { error } =
            await supabaseClient.auth.updateUser({
                password: password
            });


        if (error) {

            alert(
                "Não foi possível alterar sua senha: " +
                error.message
            );

            resetPasswordButton.disabled = false;
            resetPasswordButton.textContent =
                "Salvar nova senha";

            return;
        }


        alert(
            "Senha alterada com sucesso!"
        );


        await supabaseClient.auth.signOut();


        window.location.href =
            "login.html";

    }
);