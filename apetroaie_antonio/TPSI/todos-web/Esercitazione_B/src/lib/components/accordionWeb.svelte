<script>
    let isFirstPanelOpen = false;
    let isSecondPanelOpen = false;

    const toggleFirstPanel = () => {
        isFirstPanelOpen = !isFirstPanelOpen;
        isSecondPanelOpen = false;
    }

    const toggleSecondPanel = () => {
        isSecondPanelOpen = !isSecondPanelOpen;
        isFirstPanelOpen = false;
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<div class="container">
    <div class="panel panel1">
        <h1 class="panel-title">HEADER 1</h1>
        <button class="panel-button" on:click={toggleFirstPanel} aria-label={isFirstPanelOpen ? "Close" : "Open"}>
            <span class="material-icons">{isFirstPanelOpen ? "keyboard_arrow_down" : "keyboard_arrow_up"}</span>
        </button>
    </div>
    <p class="{isFirstPanelOpen ? '' : 'hidden'}">
        
     SEI   

    </p>

    <div class="panel panel2">
        <h1 class="panel-title">HEADER 2</h1>
        <button class="panel-button" on:click={toggleSecondPanel} aria-label={isSecondPanelOpen ? "Close" : "Open"}>
            <span class="material-icons">{isSecondPanelOpen ? "keyboard_arrow_down" : "keyboard_arrow_up"}</span>
        </button>
    </div>
    <p class="{isSecondPanelOpen ? '' : 'hidden'}">

    BELLO

    </p>
</div>

<style>
    .hidden {
        display: none;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }

    .panel {
        width: 80%;
        display: flex;
        align-items: center;
        border: 1px solid gray;
        margin-bottom: 10px;
    }

    .panel-title {
        margin-right: 2%;
    }

    .panel-button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .panel-button:hover {
        border: none;
    }

    .panel:hover {
        border-width: 3px;
        background-color: #7bff00;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .panel:hover .panel-button:hover {
        border: none;
    }
</style>
