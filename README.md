1. components/
   Contains reusable components that are most often used to compose Feature or Page components.
   These components are almost always pure and presentational, with no side-effects.

2. contexts/
   Contains reusable contexts used to provide data through a tree of components.

3. features/
   a. Contains reusable Feature Components. A Feature Component is a concept in which
   all logic required for a feature is colocated to a single directory.
   A Feature Component is often composed of many other components,
   either local or shared. The same is true for all resources:
   utils, types, hooks, and so on.
   b. Feature Components often include side-effects.

4. hooks/
   Contains reusable React Hooks that are used in multi-places. If the hook is only used
   by a feature, then it should be put into the feature's folder

5. pages/
   a. Contains Page Components. Each Page Component is associated with a route.
   b. Page Components compose the content of a page by importing Components and Feature Components.
   c. A Page Component should rarely include side-effects, and should instead delegate side-effects to Feature Components.
   There are many exceptions, if the side-effect applies to the whole page, or shared with multi-children, we can still have side effects in page.
   (e.g set the title of page, or fetch the data which is used by many sub-components, etc)

6. services/
   a. Contains global reusable code for interacting with an API, often in the form of hooks
   b. other services that are globally used

7. styles/
   Reusable or global styles.

8. types/
   Global reusable types

9. utils/
   Global reusable utility functions.

10. config/
    Global used configurations, like environment variables

11. Name convention
    when naming the tsx file, instead of using PascalCase, we use kebab-case.
    The reason explains here:https://x.com/rwieruch/status/1836434009041035635
    BTW, I met the problem when I used PascalCase before, when I changed one letter of
    my componet file name from lowercase to uppder case, the git didn't identify the change.

12. Checklist

multi-language support: i18n-react -- yes
router: react-router -- yes
unit test: vitest+React testing library --yes
husky: yes
material ui: font- not installed
icon - installed

hooks: useTitle

unit test samples:
components/confirm-button/confirm-button.test.tsx
services/i18n/i18n.test.ts

13. NOTE, when run npm install, please wait until \_ folder is created under .husky folder
