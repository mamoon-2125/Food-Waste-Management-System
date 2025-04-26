// Food Waste Management - Animation.js
// Handles hover and click effects for food waste statistics

document.addEventListener('DOMContentLoaded', function() {
    // Create the food waste statistics container
    createWasteStatsContainer();
    
    // Initialize hover and click effects
    initializeEffects();
});

function createWasteStatsContainer() {
    // Create main container for food waste statistics
    const container = document.createElement('div');
    container.className = 'worldwide-waste-container';
    
    // Add title
    const title = document.createElement('h2');
    title.innerHTML = 'Global Food Waste <span>Statistics</span>';
    container.appendChild(title);
    
    // Create stats grid
    const statsGrid = document.createElement('div');
    statsGrid.className = 'waste-stats-grid';
    
    // Worldwide food waste statistics data
    const wasteStats = [
        {
            icon: 'fa-globe',
            value: '1.3',
            unit: 'Billion Tons',
            description: 'Food wasted annually worldwide'
        },
        {
            icon: 'fa-dollar-sign',
            value: '1',
            unit: 'Trillion USD',
            description: 'Economic cost of food waste per year'
        },
        {
            icon: 'fa-users',
            value: '828',
            unit: 'Million',
            description: 'People facing hunger globally'
        },
        {
            icon: 'fa-water',
            value: '45',
            unit: 'Trillion Liters',
            description: 'Water used to produce wasted food'
        },
        {
            icon: 'fa-thermometer-half',
            value: '8-10%',
            unit: '',
            description: 'Global greenhouse gas emissions from food waste'
        },
        {
            icon: 'fa-home',
            value: '43%',
            unit: '',
            description: 'Food waste occurs at household level'
        }
    ];
    
    // Create stat cards
    wasteStats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'waste-stat-card';
        statCard.setAttribute('data-description', stat.description);
        
        const iconContainer = document.createElement('div');
        iconContainer.className = 'waste-stat-icon';
        iconContainer.innerHTML = `<i class="fas ${stat.icon}"></i>`;
        
        const content = document.createElement('div');
        content.className = 'waste-stat-content';
        
        const value = document.createElement('h3');
        value.innerHTML = `${stat.value} <span>${stat.unit}</span>`;
        
        const description = document.createElement('p');
        description.textContent = stat.description;
        
        content.appendChild(value);
        content.appendChild(description);
        
        statCard.appendChild(iconContainer);
        statCard.appendChild(content);
        
        statsGrid.appendChild(statCard);
    });
    
    container.appendChild(statsGrid);
    
    // Create expandable info section
    const infoSection = document.createElement('div');
    infoSection.className = 'waste-info-section';
    infoSection.innerHTML = `
        <div class="waste-info-content">
            <h3>Why Does Food Waste Matter?</h3>
            <p>Food waste represents not only a significant economic and resource loss but also a missed opportunity to improve global food security and mitigate environmental impacts.</p>
            <ul>
                <li><strong>Environmental Impact:</strong> Food waste in landfills produces methane, a greenhouse gas 25 times more potent than CO2.</li>
                <li><strong>Resource Waste:</strong> Producing uneaten food squanders resources like seeds, water, energy, land, fertilizer, and labor.</li>
                <li><strong>Economic Loss:</strong> Food waste represents a $1 trillion economic loss annually worldwide.</li>
                <li><strong>Hunger:</strong> Reducing food waste could help feed the 828 million people who go hungry each day.</li>
            </ul>
            <button class="btn primary waste-action-btn">Take Action Now</button>
        </div>
    `;
    
    container.appendChild(infoSection);
    
    // Add the container to the page - prefer to add after the hero section
    const targetSection = document.querySelector('.hero') || document.querySelector('header');
    if (targetSection && targetSection.nextElementSibling) {
        document.body.insertBefore(container, targetSection.nextElementSibling);
    } else {
        document.body.appendChild(container);
    }
    
    // Add stylesheet link for the waste statistics styles
    addStyles();
}

function addStyles() {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
        .worldwide-waste-container {
            padding: 3rem 1.5rem;
            background-color: #f8f9fa;
            border-radius: 8px;
            margin: 2rem auto;
            max-width: 1200px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .worldwide-waste-container h2 {
            text-align: center;
            color: #2a3b4c;
            margin-bottom: 2rem;
            font-size: 2.2rem;
            position: relative;
        }
        
        .worldwide-waste-container h2 span {
            color: #4CAF50;
        }
        
        .worldwide-waste-container h2:after {
            content: "";
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(to right, #4CAF50, #8BC34A);
            margin: 15px auto 0;
            border-radius: 2px;
        }
        
        .waste-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }
        
        .waste-stat-card {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border-left: 4px solid transparent;
        }
        
        .waste-stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            border-left: 4px solid #4CAF50;
        }
        
        .waste-stat-card.active {
            background-color: #f1f9f1;
            border-left: 4px solid #4CAF50;
        }
        
        .waste-stat-icon {
            background: linear-gradient(135deg, #4CAF50, #8BC34A);
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1.5rem;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }
        
        .waste-stat-card:hover .waste-stat-icon {
            transform: rotate(10deg) scale(1.1);
        }
        
        .waste-stat-card.active .waste-stat-icon {
            transform: rotate(10deg) scale(1.1);
        }
        
        .waste-stat-icon i {
            color: white;
            font-size: 1.5rem;
        }
        
        .waste-stat-content h3 {
            font-size: 1.8rem;
            margin: 0 0 0.5rem;
            color: #2a3b4c;
            transition: all 0.3s ease;
        }
        
        .waste-stat-content h3 span {
            font-size: 1rem;
            color: #4CAF50;
            display: inline-block;
            vertical-align: middle;
        }
        
        .waste-stat-content p {
            margin: 0;
            color: #6c757d;
            font-size: 0.9rem;
            line-height: 1.4;
        }
        
        .waste-info-section {
            background: #4CAF50;
            border-radius: 8px;
            color: white;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease, padding 0.3s ease;
            padding: 0 1.5rem;
            margin-top: 1rem;
        }
        
        .waste-info-section.active {
            max-height: 500px;
            padding: 1.5rem;
        }
        
        .waste-info-content {
            padding: 0.5rem 0;
        }
        
        .waste-info-content h3 {
            margin: 0 0 1rem;
            font-size: 1.5rem;
        }
        
        .waste-info-content p {
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        
        .waste-info-content ul {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
        }
        
        .waste-info-content li {
            margin-bottom: 0.75rem;
            line-height: 1.5;
        }
        
        .waste-action-btn {
            margin-top: 1rem;
            background: white;
            color: #4CAF50;
            border: none;
        }
        
        .waste-action-btn:hover {
            background: #f0f0f0;
            transform: scale(1.05);
        }
        
        @media (max-width: 768px) {
            .worldwide-waste-container {
                padding: 2rem 1rem;
            }
            
            .waste-stats-grid {
                grid-template-columns: 1fr;
            }
            
            .waste-stat-card {
                padding: 1.25rem;
            }
            
            .waste-stat-icon {
                width: 50px;
                height: 50px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

function initializeEffects() {
    // Wait for the DOM to be fully loaded
    setTimeout(() => {
        // Get all stat cards
        const statCards = document.querySelectorAll('.waste-stat-card');
        const infoSection = document.querySelector('.waste-info-section');
        
        // Apply hover and click effects
        statCards.forEach(card => {
            // Add click event
            card.addEventListener('click', function() {
                // Toggle active class on clicked card
                statCards.forEach(c => {
                    if (c !== this) c.classList.remove('active');
                });
                
                this.classList.toggle('active');
                
                // Show or hide info section
                if (this.classList.contains('active')) {
                    infoSection.classList.add('active');
                    
                    // Add animation to highlight key facts
                    const description = this.getAttribute('data-description');
                    const listItems = document.querySelectorAll('.waste-info-content li');
                    
                    listItems.forEach(item => {
                        if (item.textContent.toLowerCase().includes(description.toLowerCase().split(' ')[0])) {
                            item.style.color = '#FFEB3B';
                            setTimeout(() => {
                                item.style.color = '';
                            }, 1500);
                        }
                    });
                } else {
                    infoSection.classList.remove('active');
                }
            });
            
            // Add hover animations
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.waste-stat-icon i');
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                setTimeout(() => {
                    icon.style.transform = '';
                }, 300);
            });
            
            // Counter animation on hover
            card.addEventListener('mouseenter', function() {
                const valueElement = this.querySelector('.waste-stat-content h3');
                const originalValue = valueElement.textContent;
                const numValue = parseFloat(originalValue);
                
                if (!isNaN(numValue) && numValue > 0 && numValue < 100) {
                    let currentValue = 0;
                    const increment = numValue / 20;
                    const interval = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numValue) {
                            clearInterval(interval);
                            valueElement.innerHTML = originalValue;
                        } else {
                            valueElement.innerHTML = currentValue.toFixed(1) + 
                                (originalValue.includes('<span>') ? 
                                ' <span>' + originalValue.split('<span>')[1] : '');
                        }
                    }, 30);
                }
            });
        });
        
        // Action button click event
        const actionBtn = document.querySelector('.waste-action-btn');
        if (actionBtn) {
            actionBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Redirect to donation page
                window.location.href = 'donation.html';
            });
        }
        
        // Add mousemove parallax effect to stats container
        const container = document.querySelector('.worldwide-waste-container');
        container.addEventListener('mousemove', function(e) {
            const cards = this.querySelectorAll('.waste-stat-card');
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
                const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
                
                const distanceX = (x - cardCenterX) / 30;
                const distanceY = (y - cardCenterY) / 30;
                
                card.style.transform = `translateX(${-distanceX}px) translateY(${-distanceY}px)`;
            });
        });
        
        container.addEventListener('mouseleave', function() {
            const cards = this.querySelectorAll('.waste-stat-card');
            cards.forEach(card => {
                card.style.transform = '';
            });
        });
    }, 500);
} 