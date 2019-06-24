class Case {
    constructor(domElement) {
       
        this.domElement = domElement;
        
        this.expandButton = domElement.querySelector('.expandButton');
        
        this.expandButton.textContent = 'expand';

        this.expandButton.addEventListener('click', () => this.expandArticle());
    }

    expandCase() {
        this.domElement.classList.toggle('case-open')
    }
}

let cases = document.querySelectorAll('.case');

cases.forEach(case => new Case(case));