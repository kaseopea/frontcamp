var TodoActions = function() {
    // of course this lacks all error handling for brevity

    var BACKEND = 'https://yourserver.com'
    function parse( r ) { return JSON.parse( r.responseText ) }
    var dispatch = dispatcher.dispatch.bind(dispatcher)

    return {
        createTodo: function( todo ) {
            var r = new XMLHttpRequest()
            r.open( 'POST', BACKEND+'/todos', true )
            r.onload = function() { dispatch( { type: 'CREATE_TODO', todo: parse(r) } ) }
            r.send( JSON.stringify(todo) )
        },

        // update and remove are similar except with
        // PUT/UPDATE_TODO and DELETE/REMOVE_TODO
    }
}

export class NewsActions {

}