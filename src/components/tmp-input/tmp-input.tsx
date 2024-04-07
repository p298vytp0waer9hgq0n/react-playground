type commonProps = {
    className: string;
};

type conditionalProps =
    | {
          inputType: 'text';
          length: number;
          max: never;
      }
    | {
          inputType: 'number';
          length: never;
          max: number;
      };

type Props = conditionalProps & commonProps;

interface MapFunction<K, T> {
    (args: K): T;
}

class Functor<K extends string | number | symbol, T> {
    store: Partial<Record<K, T>> = {};
    constructor(args?: Partial<Record<K, T>>) {
        if (args) {
            this.store = { ...args };
        }
    }

    map<L>(fn: MapFunction<T, L>) {
        const newStore: Partial<Record<K, L>> = {};
        if (!this.store) {
            return new Functor();
        }
        // for (const [k, v] of Object.entries(this.store)) {
        for (const k in this.store) {
            if (this.store[k]) {
                newStore[k] = fn(this.store[k] as T);
            }
        }
        return new Functor(newStore);
    }
}
const arr = { somethin: 'something', blah: 'bleh' };
const functor = new Functor(arr);

export function TmpInput(props: Props) {
    return <input />;
}
