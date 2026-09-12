export class Utilisateurs{
    consructor(id, name){
        this.id=id;
        this.name=name;
        this.maxLivres=3;
        this.borrowedBooks=[];
    }

    borrowBooks(book){
        if (this.borrowedBooks.length>=this.maxLivres){
            console.log('livres limites pour ${this.name}');
            return;
        }
        this.borrowBooks.push(book);
        console.log('${this.name} à emprunté: ${book.title}');
    }

    returnBooks(book){
        const index=this.borrowedBooks.findIndex(b=>b.id===book.id);
        if (index!==-1){
            this.borrowedBooks.splice(index,1);
            console.log('${this.name} a rendu : ${book.title}');
        }else{
            console.log("livre non trouvé.");
        
        }
    }
}


export class PremiumUtilisateur extends Utilisateurs{
    constructor(id,name){
        super(id,name);
        this.maxLivres=5;
    }

    borrowBooks(book){
        if(this.borrowedBooks.length>maxLivres){
            console.log('livres limites pour ${this.name}');
            return;
        }
        super.borrowBooks(book)
    }
}