const makeCoffee = function() {
    let bean = 0;
    function shot(times){
        bean += times;
    }
    return {
        deep(){
            shot(1);
        },
        light(){
            shot(-1);
        },
        americano(){
            return bean;
        },
    };
};

const oneShot = makeCoffee();
console.log(oneShot);
