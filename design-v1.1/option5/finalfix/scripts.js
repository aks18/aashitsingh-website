document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        const header = item.querySelector('.experience-header');
        
        header.addEventListener('click', () => {
            const wasActive = item.classList.contains('is-active');
            
            // 1. Reset all items
            experienceItems.forEach(i => {
                i.classList.remove('is-active');
                
                // Indicators
                const indicator = i.querySelector('.experience-indicator');
                indicator.classList.remove('bg-primary-fixed', 'shadow-primary-glow');
                indicator.classList.add('bg-surface-container-high');
                
                const icon = indicator.querySelector('.material-symbols-outlined');
                icon.innerText = 'work_outline';
                icon.classList.remove('text-on-primary-fixed');
                icon.classList.add('text-on-surface-variant');
                
                // Card & Line
                const card = i.querySelector('.experience-card');
                card.classList.remove('bg-surface-container-low', 'border-primary-fixed/30');
                card.classList.add('bg-surface-container-lowest');
                
                const line = i.querySelector('.active-line');
                if(line) {
                    line.classList.remove('scale-y-100');
                    line.classList.add('scale-y-0');
                }
            });
            
            // 2. Open clicked item if it wasn't already open
            if (!wasActive) {
                item.classList.add('is-active');
                
                const indicator = item.querySelector('.experience-indicator');
                indicator.classList.add('bg-primary-fixed', 'shadow-primary-glow');
                indicator.classList.remove('bg-surface-container-high');
                
                const icon = indicator.querySelector('.material-symbols-outlined');
                icon.innerText = 'work';
                icon.classList.add('text-on-primary-fixed');
                icon.classList.remove('text-on-surface-variant');
                
                const card = item.querySelector('.experience-card');
                card.classList.add('bg-surface-container-low', 'border-primary-fixed/30');
                card.classList.remove('bg-surface-container-lowest');

                const line = item.querySelector('.active-line');
                if(line) {
                    line.classList.remove('scale-y-0');
                    line.classList.add('scale-y-100');
                }
            }
        });
    });
});