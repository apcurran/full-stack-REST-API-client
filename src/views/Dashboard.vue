<template>
  <main class="dashboard">
      <nav class="dashboard__nav">
          <h1 class="dashboard__nav__title">Dashboard</h1>
          <ul class="dashboard__nav__list">
              <li class="dashboard__nav__tab">
                  <button @click="handleTabClick('NewHouseForm', 0)" :class="{ 'activeTab': activeTabIndex === 0 }" class="dashboard__nav__tab__btn">Add New Home</button>
              </li>
              <li class="dashboard__nav__tab">
                  <button @click="handleTabClick('UpdateHouseForm', 1)" :class="{ 'activeTab': activeTabIndex === 1 }" class="dashboard__nav__tab__btn">Update Home</button>
              </li>
              <li class="dashboard__nav__tab">
                  <button @click="handleTabClick('DeleteHouseForm', 2)" :class="{ 'activeTab': activeTabIndex === 2 }" class="dashboard__nav__tab__btn">Delete Home</button>
              </li>
          </ul>
      </nav>
      <section class="dashboard__section">
        <div class="dashboard__section__user">
            <h2 class="dashboard__section__user__greeting">Hello, {{ user }}!</h2>
            <Logout/>
        </div>
        <keep-alive>
            <component :is="selectedForm"></component>
        </keep-alive>
      </section>
  </main>
</template>

<script>
import Logout from "../components/Logout";
import NewHouseForm from "../components/NewHouseForm";
import UpdateHouseForm from "../components/UpdateHouseForm";
import DeleteHouseForm from "../components/DeleteHouseForm";

export default {
    name: "Dashboard",
    components: {
        Logout,
        NewHouseForm,
        UpdateHouseForm,
        DeleteHouseForm,
    },
    async created() {
        const API_USER_URL = "http://localhost:5000/user/dashboard";
        const options = {
            headers: {
                authorization: `Bearer ${localStorage.authToken}`
            }
        };

        try {
            const response = await fetch(API_USER_URL, options);
            const data = await response.json();

            this.user = data.name;

        } catch (err) {
            console.error(err);
        }
    },
    data() {
        return {
            selectedForm: "NewHouseForm",
            activeTabIndex: 0,
            user: null
        }
    },
    methods: {
        setActiveTab(tabIndex) {
            this.activeTabIndex = tabIndex;
        },
        handleTabClick(currentSelection, tabIndex) {
            this.selectedForm = currentSelection;
            this.setActiveTab(tabIndex);
        }
    }
}
</script>

<style>

.dashboard {
    width: 90rem;
    margin: 0 3rem;
    display: grid;
    grid-template-columns: auto 1fr;

    box-shadow: 0 6px 12px rgba(0, 0, 0, .19);
}

.dashboard__nav {
    background-color: #EDF2F7;
}

.dashboard__nav__title {
    padding: 2rem 0 2rem 2.5rem;
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    color: var(--blue);
}

.dashboard__nav__list {
    width: 13rem;
    list-style: none;
}

.dashboard__nav__tab__btn {    
    text-align: left;
    width: 100%;
    cursor: pointer;
    padding: 1.5rem 2rem 1.5rem 2.5rem;
    border: none;
    background-color: #edf2f7;
    font-size: 1.05rem;
    outline: none;
    /* Transparent right border on all tabs prevents grow/shrink effect on button click */
    border-right: 5px solid transparent;
}

.activeTab {
    background-color: #DAE2EA;
    border-right: 5px solid var(--blue);
}

.dashboard__section__user {
    display: flex;
    margin: 1.75rem 5rem;
}

.dashboard__section__user__greeting {
    margin-right: 2.5rem;
}

</style>