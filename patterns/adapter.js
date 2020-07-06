// old interface
function TicketPrice() {
 this.request = function( start, end, overweightLuggage ) {

   // price calculation ...
   return "$150.34";
 };
}

// new interface
function NewTicketPrice() {
    this.discount = function( discountCode ) { /* process credentials */ };
    this.setStart = function( start ) { /* set start point */ };
    this.setDestination = function( destination ) { /* set destination */ };
    this.calculate = function( overweightLuggage ) {

        //price calculation ...
        return "$120.20";
    };
}

// adapter interface
function TicketAdapter( discount ) {
    let pricing = new NewTicketPrice();

    pricing.discount( discount );

    return {
        request: function( start, end, overweightLuggage ) {
            pricing.setStart( start ) ;
            pricing.setDestination( end );

            return pricing.calculate( overweightLuggage );
        }
    };
}

const pricing = new TicketPrice();
const discount = { code: "asasdw" };
const adapter = new TicketAdapter( discount );

// old ticket pricing
let price = pricing.request( "Toronto", "London", 20 );

console.log( "Old --->>> " + price );

// new ticket pricing
price = adapter.request( "Toronto", "London", 20 );
console.log( "New ---->>>: " + price );
