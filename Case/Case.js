

class Case {
    constructor(domElement) { 
        
    this.domElement = domElement; 

    this.expandButton = this.domElement.querySelector('.expandButton'); 

    this.expandButton.textContent = 'expand'

    this.expandButton.addEventListener('click', () => { this.expandCase(); })

    this.domElement.addEventListener('transitionend', () => {this.domElement.style.height = ""; }) 
    }    
    
    expandCase() { 
        if(this.domElement.classList.contains('case-open')) {
            this.domElement.classList.remove('case-open')
        } else {
            this.domElement.style.height = this.domElement.scrollHeight + 'px';
            this.domElement.classList.add('case-open'); 
        } 
    } 
} 

const cases = document.querySelectorAll('.case'); articles.forEach(case => new Case(case))

const articles = document.querySelectorAll('.article'); articles.forEach(article => new Article(article))