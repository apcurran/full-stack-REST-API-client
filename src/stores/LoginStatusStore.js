const LoginStatusStore = {
    data: {
        loggedIn: false
    },
    methods: {
        isLoggedIn(status) {
            LoginStatusStore.data.loggedIn = status;
        }
    }
};

export default LoginStatusStore;