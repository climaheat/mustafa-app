<script lang="ts">
  import { NavigationMenu } from "bits-ui";
  import CaretDown from "phosphor-svelte/lib/CaretDown";
  import clsx from "clsx";
 
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/components/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
      title: "Link Preview",
      href: "/docs/components/link-preview",
      description:
        "For sighted users to preview content available behind a link."
    },
    {
      title: "Progress",
      href: "/docs/components/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    },
    {
      title: "Scroll Area",
      href: "/docs/components/scroll-area",
      description: "Visually or semantically separates content."
    },
    {
      title: "Tabs",
      href: "/docs/components/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time."
    },
    {
      title: "Tooltip",
      href: "/docs/components/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    }
  ];
 
  type ListItemProps = {
    className?: string;
    title: string;
    href: string;
    liClassName?: String;
    content?: string;
  };
</script>
 
{#snippet ListItem({ className, title, content, href, liClassName }: ListItemProps)}
  <li class={liClassName}>
    <NavigationMenu.Link
      class={clsx(
        " hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground outline-hidden block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors",
        className
      )}
      {href}
    >
      <div class="text-sm font-medium leading-none">{title}</div>
      <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
        {content}
      </p>
    </NavigationMenu.Link>
  </li>
{/snippet}


 
<NavigationMenu.Root class="relative z-10 flex w-full justify-center bg-digital-blue-100 h-12">
  <NavigationMenu.List
    class="group flex list-none items-center justify-center p-1"
  >
    <NavigationMenu.Item>
      <NavigationMenu.Link
        class="hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted focus:outline-hidden group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
        href="/"
      >
        <span class="hidden sm:inline"> Home </span>
        <span class="inline sm:hidden"> Home </span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item value="getting-started">
      <NavigationMenu.Trigger
        class="hover:text-accent-foreground focus-visible:bg-muted focus-visible:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted focus-visible:outline-hidden group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
      >
        Onze Services
        <CaretDown
          class="relative top-[1px] ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute left-0 top-0 w-full sm:w-auto"
      >
        <ul
          class="m-0 grid grid-cols-2 gap-2.5 p-3 sm:w-[500px]"
        >
          {@render ListItem({
            href: "/services",
            title: "Bekijk alle services",
            className: "bg-gray-300",
            liClassName: "col-span-2 text-center"
          })}

          {@render ListItem({
            href: "/services#service-airco",
            title: "Airco onderhoud/plaatsing",
            className: "bg-gray-100"
          })}
          {@render ListItem({
            href: "/services#service-warmtepomp",
            title: "Warmte pomp plaatsing",
            className: "bg-gray-100"
          })}
          {@render ListItem({
            href: "/services#service-warmWaterToestel",
            title: "Warm water toestellen",
            className: "bg-gray-100"
          })}
          {@render ListItem({
            href: "/services#service-gasketel",
            title: "Herstelling gasketel",
            className: "bg-gray-100"
          })}
          {@render ListItem({
            href: "/services#service-badkamer",
            title: "Badkamer renovatie",
            className: "bg-gray-100"
          })}
          {@render ListItem({
            href: "/services#service-centraleVerwarming",
            title: "Centrale verwarming",
            className: "bg-gray-100"
          })}
          {@render ListItem({
            href: "/services#service-sanitair",
            title: "Sanitair",
            className: "bg-gray-100"
          })}
          {@render ListItem({
            href: "/services#service-gasleiding",
            title: "Gasleiding",
            className: "bg-gray-100"
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
        <NavigationMenu.Item>
      <NavigationMenu.Link
        class="hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted focus:outline-hidden group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white"
        href="/contact"
      >
        <span class="hidden sm:inline"> Contacteer Ons </span>
        <span class="inline sm:hidden"> Contact </span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Indicator
      class="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_250ms_ease] duration-200 data-[state=hidden]:opacity-0"
    >
      <div
        class="bg-border relative top-[70%] size-2.5 rotate-[45deg] rounded-tl-[2px]"
      ></div>
    </NavigationMenu.Indicator>
  </NavigationMenu.List>
  <div
    class="perspective-[2000px] absolute left-0 top-full flex w-full justify-center"
  >
    <NavigationMenu.Viewport
      class="text-popover-foreground bg-background data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in relative mt-2.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border shadow-lg transition-[width,_height] duration-200 sm:w-[var(--bits-navigation-menu-viewport-width)] "
    />
  </div>
</NavigationMenu.Root>