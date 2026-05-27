declare module "github-slugger" {
  export default class GithubSlugger {
    constructor();
    slug(value: string): string;
    reset(): void;
  }
}
