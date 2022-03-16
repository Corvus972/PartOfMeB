
export default class EnvService {

    static get(value: any, defaultValue: any) {
        if (value && process.env[value]) {
            return process.env[value];
        } else {
            return defaultValue;
        }
    }
}