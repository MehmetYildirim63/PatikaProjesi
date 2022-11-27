# PatikaProjesi
##This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.
##Bu Projede Ben Angular HTML CSS kullanarak bir web sitesi tasarlamaya çalıştım
Öncelikle bu sitenin taslagını oluşturdum bunu da Html ve CSS ile gercekleştirdim.
Daha sonra angular ile veri yüklemeyi ve veriler düzerinde düzenleme yapmaya çalıştım 

##Firebase
Firebase, Google tarafından mobil ve web uygulamaları oluşturmak için geliştirilmiş ücretsiz bir platformdur.
Kullanıcı girişlerinin olduğu ve verilerin saklandığı birden fazla platformda geliştirilecek bir yazılım projeniz varsa Firebase size bu konuda oldukça fayda sağlayacaktır.2022 itibariyle bulut bilişim teknolojisinin gelişmesiyle birlikte, büyük verilerin internet üzerinde depolanabilirliği ve erişilebilirliği kolaylaşmıştır.

##Ben veri tabanı olarak firebase projemde kullandım.

##Bu proje tenel olarak;
Login Kısmı,
Ürünler Sayfası,
Sepet kısmı,
Sadece Admin kullanıcının ulaşabilcegi 
Ürün Ekleme, 
Kategori Ekleme,
Sayfalarından oluşmaktadır.

##login Kısmında:
Firebase  Authentication Kısmında kullanıcı oluşturmamıza olanak saglıyor.
Bu projede ben login kısmi için  oturum.service.ts sayfası oluşturdum bu sayfada firebase de  Authentication  kısmına HttpClienti projemize import ederek 
post metodu yardımıyla veri göndermiş oluyoruz daha sonra kayıt olan veriler ile projedede görüldügü gibi login işlemlerini gerçekleştiriyoruz 
 
##Ürünler Sayfası
Ürünler sayfasında öncelikle companentleri oluşturdum .Burda ts kısmında kendim ürün ekledim ilk başta çerceveyi şekilendirdikten sonra servis yardımıyla firebase 
veritabanına ürün ekliyererek verileri orada depoladım daha sonra depoladıgım ürünleri tekrar ts sayfasında alarak ekrana basma işlemini gerçekleştirdim.

##sepet Kısmı:
sepet kısmında ürünleri sepete ekleyip daha sonra sepette arttırıp azaltma işlemini yapabildim.
Buradada projede bulunan cart.actions.ts ,cart.reducer.ts ,cart.selectors.ts sayfalarında işlem yaptım daha sonra yapmış oldugum işlemleri sepet-islemleri.companent.ts de kullandım.
