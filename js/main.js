const { createApp } = Vue;

createApp({

    data() {
        return {
            data: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            ],
            selectedChat: {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            message:"",
            search:"",
            filteredResults:[],
            showDelete:false
        };
    },

    methods: {
        selectChat(item){ 
            this.selectedChat = item;
        },
        sendMessage(){
            this.selectedChat.messages.push({
                date:Date.now(),
                message:this.message,
                status:'sent'
            });
            setTimeout(()=>{
                this.selectedChat.messages.push({
                    date:Date.now(),
                    message:'OK',
                    status:'received'
                })
            },1000)
        },
        searchHandler(){
            this.filteredResults = this.data.filter(item => item.name.includes(this.search));
        },
        deleteMessage(message){
              this.selectedChat.messages =  this.selectedChat.messages.filter(item => item !== message);
        }
    },
    mounted () {
        console.log(this);
    
        window.addEventListener('click', function (e) {
          // Elemento che effettivamente è stato cliccato
          console.log('click', e.target);
    
          if (e.target.classList.contains('message') || e.target.closest('.message')) {
          let element = e.target.getElementsByClassName('delete')
          
          if(element[0].style.display === "block"){
            element[0].style.display = "none"
          } else {
            element[0].style.display='block'
          }

         
           
          }
    
          // Attivo un timer per dare il tempo alla voce cliccata di eseguire la sua azione.
          /*setTimeout(() => {
            // se activeMessageDropdown > -1, vuol dire che è attivo il dropdown su un messaggio
            // lo devo resettare a -1
            
          }, 300)*/
        });
      }

}).mount("#app")







