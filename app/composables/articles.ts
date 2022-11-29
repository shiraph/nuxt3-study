import mock from "~~/mock/articles.json";
import { Ref } from "nuxt/dist/app/compat/capi";
import { Article } from "./models/Article";

export const useArticles = async () => {
  return await ArticlesStore.instance();
};

export class ArticlesStore {
  private _state: Ref<Array<Article>>;
  private static _instance: ArticlesStore;

  constructor() {
    this._state = useState<Array<Article>>("menus", () => []);
  }

  public static async instance(): Promise<ArticlesStore> {
    this._instance = this._instance ?? new ArticlesStore();
    this._instance.listMock();
    return this._instance;
  }

  get state() {
    return this._state.value;
  }

  set state(menus: Array<Article>) {
    this._state.value = menus;
  }

  private listMock = () => (this.state = mock);
}
