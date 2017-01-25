import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
    return slideToLeft();
}

export function hostStyle() {
    return {
        '[@routerTransition]': '',
        '[style.display]': '"block"',
        '[style.position]': '"absolute"'
    }
}

function slideToLeft() {
    return trigger('routerTransition', [
        transition('void => *', [
            style({ transform: 'translateX(-10%)' }),
            animate(400)
        ])
    ]);
}
