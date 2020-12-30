<template>
    <div class="person-tile">
        <div class="tile" :class="{ 'selected' : selected }">
            <div class="profile-image-container">
                <img alt="profile" class="profile-image" :src="person.image">
            </div>
            <div class="details-section">
                <p class="highlighted">{{ person.name }}</p>
                <p>Country: <span class="font-weight-bold">{{ person.country }}</span></p>
                <p>Gender:  <span class="font-weight-bold">{{ person.gender }}</span></p>
                <p>Age:  <span class="font-weight-bold">{{ person.age }}</span></p>
                <p>Interest:  <span class="font-weight-bold">{{ person.interest }}</span></p>
            </div>
            <div class="selected-badge">
                <span class="badge badge-primary">Selected</span>
            </div>
        </div>
    </div>
</template>

<style>
    .tile{
        display: flex;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 20px;
        position: relative;
    }

    .tile.selected, .tile:hover{
        background-color: #fafafa;
        cursor: pointer;
    }

    .tile .selected-badge{
        display: none;
    }

    .tile.selected .selected-badge{
        display: initial;
        position: absolute;
        right: 20px;
        top: 15px
    }

    .tile .details-section p{
        margin: 0;
        font-size: 0.8em;
        padding: 0 0 0 20px;
    }

    .tile .details-section p.highlighted{
        font-weight: 600;
        font-size: 0.9em;
    }

    .profile-image{
        width: 100px;
        height: 100px;
    }
</style>


<script>
    export default {
        name: 'PersonTile',
        props: ['selected', 'person']
    }
</script>
