import { Component, OnInit } from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';



@Component({
  selector: 'app-descargar',
  templateUrl: './descargar.page.html',
  styleUrls: ['./descargar.page.scss'],
})
export class DescargarPage implements OnInit {
  items = [ 
  {'url': 'https://www.w3schools.com/html/mov_bbb.mp4' , 'name':'videobajadoIonic'}, 
  {'url': 'https://www.w3schools.com/html/mov_bbb.mp4' , 'name':'videobajadoIonicDos'},
  {'url': 'https://www.w3schools.com/html/mov_bbb.mp4' , 'name':'videobajadoIonicTres'},
 ];
  
  maximo
  contador = 0
  video
  private win: any = window;
  path = 'file:///storage/emulated/0/fittech_downloads/videobajadoIonicTres.mp4'


  constructor(private Filetransfer:FileTransfer , private file:File) { }

  ngOnInit() {
      this.maximo = this.items.length
    
    // console.log(this.items[0]['name'])
    // console.log(this.items[1]['name'])
    // console.log(this.items.length)


    this.video = this.win.Ionic.WebView.convertFileSrc(this.path);
        
  }

  testear(){
    
   for(let i =0; i < this.items.length ; i++ ){
    
     console.log(this.items[i]['name'])
   }

  }


  descarga(){

    //Si la carpeta existe
    this.file.checkDir(this.file.externalRootDirectory, 'fittech_downloads').then(response =>{
  
        //Aca debera estar el Loop  
        for(let i =0; i < this.items.length ; i++ ){
          //sumar descargas
          this.contador++
          //Aca comprubea el nombre del archivo dentro del directorio
          this.file.checkFile(this.file.externalRootDirectory, 'fittech_downloads/' + this.items[i]['name'] + '.mp4').then((resp=>{
            console.log('el archivo ya existe dentro de la carpeta no hagas nada.',resp);
          })).catch(err=>{
              //aqui guarda el documento
              const fileTransfer: FileTransferObject = this.Filetransfer.create();
              fileTransfer.download(this.items[i]['url'], this.file.externalRootDirectory + '/fittech_downloads/' + this.items[i]['name'] + '.mp4').then((entry) => {
                console.log('file download response',entry);
              })
              .catch((err) =>{
                console.log('error in file download',err);
              });
          })

        }//fin del loop
  
      console.log("LA CARPETA EXISTIA , Y no SOBREESCRIBIO la carpeta")
       //Si la carpeta no existe
    }).catch(response => {
       //aqui crea la carpeta
      this.file.createDir(this.file.externalRootDirectory, 'fittech_downloads', false).then(response => {
      console.log('Directory created',response);
      //Aca debera estar el Loop  
      for(let i =0; i < this.items.length ; i++ ){

          //sumar descargas
          this.contador++

       //aqui guarda el documento
      const fileTransfer: FileTransferObject = this.Filetransfer.create();
        fileTransfer.download(this.items[i]['url'], this.file.externalRootDirectory + '/fittech_downloads/' + this.items[i]['name'] + '.mp4').then((entry) => {
          console.log('file download response',entry);
        })
        .catch((err) =>{
          console.log('error in file download',err);
        });
      
      }//fin del loop
      //aqi atrapa el error
      }).catch(err => {
        console.log('Could not create directory "fittech_downloads" ',err);
      }); 
    })

    console.log("TERMINO TODO EL PROCESO")
    console.log("EVALUAR QUE HACEMOS")

   }


}