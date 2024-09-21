// interface IAuth {
//     postLogin: (user: User) => void;
//     logout: () => void;
// }

type User = {
    email: string;
    name: string;
    password: string;
};

const Auth = {
    postLogin: function (user: User) {
        // Credential Management API
        // @ts-ignore
        if (window.PasswordCredential && user.password) {
            // @ts-ignore
            const credential = new PasswordCredential({
                id: user.email,
                password: user.password,
                name: user.name,
            });
            navigator.credentials.store(credential);
        }
    },
    logout: function () {
        // @ts-ignore
        if (window.PasswordCredential) {
            navigator.credentials.preventSilentAccess();
        }
    },
    autoLogin: async function () {
        // @ts-ignore
        if (window.PasswordCredential) {
            const credentials = await navigator.credentials.get({
                // @ts-ignore
                password: true,
            });
            $('#email').val(credentials!.id);
            // @ts-ignore
            $('#password').val(credentials!.password);
        }
    },
};

export default Auth;
