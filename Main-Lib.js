import { livre } from "./class-Livre";
import { Utilisateurs } from "./class-utilisateurs";
import { Library } from "./class-library";

const lib=new Library();
const liv01=new livre(1,LivTitle01,Author01,1999);
const liv02=new livre(2,LivTitle02,Author02,2000);
const liv03=new livre(3,LivTitle03,Author03,2001);
const liv04=new livre(4,LivTitle04,Author04,2002);

lib.addLivre(liv01);
lib.addLivre(liv02);
lib.addLivre(liv03);
lib.addLivre(liv04);
