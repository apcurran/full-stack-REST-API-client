<template>
  <main class="dashboard">
      <nav class="dashboard__nav">
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
        <h1>Dashboard</h1>
        <Logout/>
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
    data() {
        return {
            selectedForm: "NewHouseForm",
            activeTabIndex: 0
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
    border-right: 4px solid transparent;
}

.activeTab {
    background-color: #DAE2EA;
    border-right: 4px solid #4E62C2;
}

.dashboard__section {
    height: 800px;
}

</style>