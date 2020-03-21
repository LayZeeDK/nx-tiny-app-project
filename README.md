# Tiny Angular application project in an Nx workspace.
1. `npx create-nx-workspace workspace --cli=angular --preset=angular --appName=tiny-app --style=scss`
2. `ng update @angular/cli @angular/core`

## Assets workspace library
1. `ng generate library assets --directory=shared --tags="scope:shared,type:assets" --style=scss`
2. Remove the architect targets (`lint` and `test`) of the `shared-assets` project in `angular.json`:
```json
{
  "projects": {
    "shared-assets": {
      "architect": {}
    }
  }
}
```
3. `npx rimraf ./libs/shared/assets/*.js ./libs/shared/assets/*.json ./libs/shared/assets/src/*.* ./libs/shared/assets/src/lib`
4. `"# shared-assets" > ./libs/shared/assets/README.md`
5. `npx mkdirp ./libs/shared/assets/src/assets/fonts ./libs/shared/assets/src/assets/icons ./libs/shared/assets/src/assets/images`
6.
```bash
"" > ./libs/shared/assets/src/assets/fonts/.gitkeep
"" > ./libs/shared/assets/src/assets/icons/.gitkeep
"" > ./libs/shared/assets/src/assets/images/.gitkeep
```
7. `mv ./apps/tiny-app/src/favicon.ico ./libs/shared/assets/src`
8. `npx rimraf ./apps/tiny-app/src/assets`
9. In the `build` architect target of the `tiny-app` project in `angular.json`, replace the `assets` option with these two entries:
```json
{
  "projects": {
    "tiny-app": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "favicon.ico",
                "input": "libs/shared/assets/src",
                "output": ""
              },
              {
                "glob": "**/*",
                "input": "libs/shared/assets/src/assets",
                "output": "assets"
              }
            ]
          }
        }
      }
    }
  }
}
```
10. `npx -p wget-improved nwget https://nx.dev/assets/images/nx-logo-white.svg -O .\libs\shared\assets\src\assets\images\nx-logo-white.svg`
11. In `app.component.html`, replace the `src` attribute of the logo image element with `"/assets/images/nx-logo-white.svg"`.

## Styles workspace library
1. `ng generate library styles --directory=shared --tags="scope:shared,type:styles" --style=scss`
2. Remove the architect targets (`lint` and `test`) of the `shared-styles` project in `angular.json`:
```json
{
  "projects": {
    "shared-styles": {
      "architect": {}
    }
  }
}
```
3. `npx rimraf ./libs/shared/styles/*.js ./libs/shared/styles/*.json ./libs/shared/styles/src/*.* ./libs/shared/styles/src/lib/*.*`
4. `"# shared-styles" > ./libs/shared/styles/README.md`
5. `mv ./apps/tiny-app/src/styles.scss ./libs/shared/styles/src/lib/_global.scss`
6. `"@import './lib/global';" > ./libs/shared/styles/src/index.scss`
7. In the `build` architect target of the `tiny-app` project in `angular.json`, replace the `styles` option with this entry:
```json
{
  "projects": {
    "tiny-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "libs/shared/styles/src/index.scss"
            ]
          }
        }
      }
    }
  }
}
```

## Environments workspace library
1. `ng generate library environments --directory=shared --tags="scope:shared,type:environments" --style=scss`
2. `npx rimraf ./libs/shared/environments/src/lib/*.*`
3. `mv ./apps/tiny-app/src/environments/*.* ./libs/shared/environments/src/lib`
4. `"export * from './lib/environment';" > ./libs/shared/environments/src/index.ts`
5. `npx rimraf ./apps/tiny-app/src/environments`
6. In the `build` architect target of the `tiny-app` project in `angular.json`, replace the `fileReplacements` option in the `production` configuration with this entry:
```json
{
  "projects": {
    "tiny-app": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "libs/shared/environments/src/lib/environment.ts",
                  "with": "libs/shared/environments/src/lib/environment.prod.ts"
                }
              ]
            }
          }
        }
      }
    }
  }
}
```
7. In `main.ts`, replace the environment import statement with the following:
```typescript
import { environment } from '@workspace/shared/environments';
```

## Configure Nx workspace
1. Add these two `implicitDependencies` entries to the `tiny-app` project` in `nx.json`:
```json
{
  "projects": {
    "tiny-app": {
      "implicitDependencies": [
        "shared-assets",
        "shared-styles"
      ]
    }
  }
}
```
