export const
    actions = {
        
        pushItem (context, payload) {
            context.commit('pushItem', payload);
        },
        changeListDone (context, payload) {
            context.commit('changeListDone', payload);
        },
        changeActionPop (context, payload) {
            context.commit('changeActionPop', payload);
        },
        clearActionPop (context) {
            context.commit('clearActionPop');
        },
        changeShowButton (context, payload) {
            context.commit('changeShowButton', payload);
        },
        clearShowButton (context) {
            context.commit('clearShowButton');
        },
        addListSelected (context, payload) {
            context.commit('addListSelected', payload);
        },
        clearList (context) {
            context.commit('clearList');
        },
        clearListSelected (context) {
            context.commit('clearListSelected');
        },
        clearAll (context) {
            context.commit('clearAll');
        },
        pushUser (context, payload) {
            context.commit('pushUser', payload);
        }
    };
    export const getters = {
        
        finalList (state) {
            return state.finalList;
        },
        listDone (state) {
            return state.listDone;
        },
        to_user (state) {
            return state.to_user;
        },
        listSelected (state) {
            return state.listSelected;
        },
        actionPop (state) {
            return state.actionPop;
        },
        showButton (state) {
            return state.showButton;
        }
    };
    export const mutations = {
       
        pushItem (state, element) {
            state.finalList = element
        },
        pushUser (state, element) {
            state.to_user = element
        },
        clearList (state) {
            state.finalList = []
        },
        clearAll (state) {
            state.listDone = false
            state.finalList = []
            state.to_user = {}
        },
        changeListDone (state, element) {
            state.listDone = element
        },
        addListSelected (state, element) {
            state.listSelected = element
        },
        clearListSelected (state) {
            state.listSelected = []
        },
        changeActionPop (state, element) {
            state.actionPop = element
        },
        clearActionPop (state) {
            state.actionPop = false
        },
        changeShowButton (state, element) {
            state.showButton = element
        },
        clearShowButton (state) {
            state.actionPop = true
        }
    };


    export const state = () => ({
        'listDone':false,
        'actionPop':false,
        'showButton':true,
        'finalList': [],
        'to_user': {},
        'listSelected':[]        
    });