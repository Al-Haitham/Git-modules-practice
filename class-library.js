import { livre } from './class-Livre.js';
import { Utilisateurs } from './class-utilisateurs.js';

export class Library{
    construction(){
        this.books=[];
        this.users=[];
    }
    addBook(book){
        this.books.push(book);
        console.log('livre ajouté: ${book.title}');
    }
    
    findBookById(id){
        return this.books.find(book=>book.id===id);
    }
    
    findBooksByTitle(title){
        return this.books.filter(book=>book.title.toLowerCase().includes(title.toLowerCase()));
    }
    
    addUser(user){
        this.users.push(user);
        console.log('Utilisateur ajouté: ${user.name}');
    }
    
    borrowBook(userId, bookId){
        const user=this.users.find(u=>u.id===userId);
        const book=this.findBookById(bookId);
        if (user && book){
            user.borrowBook(book)
        }else{
            console.log("Utilisateur ou livre introuvable!")
        }
    }
    
    returnBook(userId, bookId){
        const user=this.users.find(u=>u.id===userId);
        const book=this.findBookById(bookId);
    
        if (user && book){
            user.returnBook(book);
        }else{
            console.log("utilisateur ou livre introuvable!")
        }
    
        
    }
}