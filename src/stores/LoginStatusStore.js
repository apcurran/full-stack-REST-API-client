const LoginStatusStore = {
    data: {
        loggedIn: false
    },
    methods: {
        isLoggedIn() {
            if (localStorage.authToken) {
                LoginStatusStore.data.loggedIn = true;
            } else {
                LoginStatusStore.data.loggedIn = false;
            }
        }
    }
};

export default LoginStatusStore;