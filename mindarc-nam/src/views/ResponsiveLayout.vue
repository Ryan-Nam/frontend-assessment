<template>
    <main role="main">
        <MainBanner />
        <ContentList />
    </main>
</template>

<script setup>
import MainBanner from '../components/MainBanner.vue';
import ContentList from '../components/ContentList.vue';
</script>


<style>
.mindarc-heading {
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 2px;
}

.mindarc-subheading {
    font-size: 1.5rem;
    letter-spacing: 2px;
}

.main-banner .mindarc-hero {
    position: relative;
}

.main-banner .mindarc-hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--mindarc-hero-bg);
    z-index: 1;
}

.main-banner .mindarc-hero>* {
    position: relative;
    z-index: 2;
}

.mindarc-hero {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    color: var(--color-white);
    text-align: center;
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
}

.content-block__text {
    margin-top: 15px;
}

.content-block__image {
    width: 100%;
    height: auto;
}

.mindarc-shadow {
    box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, 0.05), 0 -1px 12px 0 rgba(0, 0, 0, 0.03);
}

.mindarc-button {
    background-color: var(--color-white);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    white-space: nowrap;
    border-radius: 30px;
    padding: 7px 12px;
    font-size: 0.8rem;
    color: var(--color-black);
    margin-bottom: 20px;
}

.equal-height {
    display: flex;
    flex-wrap: wrap;
}

.equal-height>[class*='col-'] {
    display: flex;
    flex-direction: column;
}

.content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.125);
}

.content-area {
    flex: 1;
}

.mindarc-button__bottom {
    margin-top: auto;
}

@media (min-width: 1200px) {
    .mindarc-container {
        max-width: 1140px;
    }
}

@media (min-width: 992px) {
    .mindarc-container {
        max-width: 960px;
    }
}

/* Media query for responsiveness */
@media (max-width: 768px) {

    .mindarc-heading {
        font-size: 2.3rem;
        font-weight: bold;
        letter-spacing: 2px;
    }

    .mindarc-subheading {
        font-size: 1.2rem;
        letter-spacing: 0.5px;
        font-weight: 300;
    }


    .main-banner .mindarc-hero {
        background-image: url('https://via.placeholder.com/600x600');
    }

    .mindarc-container {
        max-width: 720px;
    }

    .mindarc-hero {
        height: auto;
        padding: 1rem;
        padding: 40px 10px 40px 10px;
    }

    .mindarc-button {
        font-size: 0.7rem;
        font-weight: 800;
    }

    .main-banner .container {
        padding-left: 0;
        padding-right: 0;
    }
}

@media (min-width: 576px) {
    .mindarc-container {
        max-width: 540px;
    }
}
</style>
