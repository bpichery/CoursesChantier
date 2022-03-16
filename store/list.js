export const
    actions = {
        
        pushItem (context, payload) {
            context.commit('pushItem', payload);
        },
        changeListDone (context, payload) {
            context.commit('changeListDone', payload);
        },
        clearList (context) {
            context.commit('clearList');
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
        }
    };


    export const state = () => ({
        'listDone':false,
        'finalList': [],
        'to_user': {}
    });