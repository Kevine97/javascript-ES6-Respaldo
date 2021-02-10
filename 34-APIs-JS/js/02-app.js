// Previamente vimos getclientRect, que nos permitia identificar cuando un elemento estaba visible, existe otra API llamada Intersection Observer, veamos como utilizarla..


document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {
        
        if(entries[0].isIntersecting) {
            console.log('Ya esta visible');
        }
    } );

    observer.observe(document.querySelector('.premium'));


});

