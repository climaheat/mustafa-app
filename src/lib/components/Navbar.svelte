<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import CaretDown from 'phosphor-svelte/lib/CaretDown';
	import clsx from 'clsx';
	import { diensten } from '$lib/data/diensten';

	type ListItemProps = {
		className?: string;
		title: string;
		href: string;
		liClassName?: String;
		content?: string;
	};

	let contentRef: any = $state(null);
	let viewportRef: any = $state(null);
	let triggerRef: any = $state(null);
	let menuValue = $state('');
</script>

{#snippet ListItem({ className, title, content, href, liClassName }: ListItemProps)}
	<li class={liClassName}>
		<NavigationMenu.Link
			class={clsx(
				'flex h-full flex-col justify-center space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground',
				className
			)}
			{href}
		>
			<div class="text-sm leading-none font-medium">{title}</div>
			<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
				{content}
			</p>
		</NavigationMenu.Link>
	</li>
{/snippet}

<NavigationMenu.Root
	class="fixed z-1000 flex h-12 w-full justify-center border border-slate-300 bg-digital-blue-50"
	bind:value={menuValue}
>
	<NavigationMenu.List class="group flex list-none items-center justify-center p-1">
		<NavigationMenu.Item>
			<NavigationMenu.Link
				class="group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted"
				href="/"
			>
				<span class="hidden sm:inline"> Home </span>
				<span class="inline sm:hidden"> Home </span>
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item value="getting-started">
			<NavigationMenu.Trigger
				bind:ref={triggerRef}
				class="group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-accent-foreground focus-visible:bg-muted focus-visible:text-accent-foreground focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted"
			>
				Onze diensten
				<CaretDown
					class="relative top-[1px] ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
					aria-hidden="true"
				/>
			</NavigationMenu.Trigger>
			<NavigationMenu.Content
				bind:ref={contentRef}
				onInteractOutside={(e: PointerEvent) => {
					console.log(menuValue);

					menuValue = '';

					console.log(menuValue);
				}}
				class="absolute top-0 left-0 w-full data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left sm:w-auto"
			>
				<ul class="m-0 grid grid-cols-2 gap-2.5 p-3 sm:w-[720px] sm:grid-cols-3">
					{@render ListItem({
						href: '/diensten',
						title: 'Bekijk alle diensten',
						className: 'bg-gray-100',
						liClassName: 'min-h-18'
					})}

					{#each diensten as dienst (dienst.slug)}
						{@render ListItem({
							href: `/diensten/${dienst.slug}`,
							title: dienst.title,
							className: 'bg-gray-100',
							liClassName: 'min-h-18'
						})}
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Link
				class="group inline-flex h-8 w-max items-center justify-center rounded-[7px] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white data-[state=open]:shadow-mini dark:hover:bg-muted dark:data-[state=open]:bg-muted"
				href="/contact"
			>
				<span class="hidden sm:inline"> Offerte vragen </span>
				<span class="inline sm:hidden"> Offerte vragen </span>
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Indicator
			class="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_250ms_ease] duration-200 data-[state=hidden]:animate-fade-out data-[state=hidden]:opacity-0 data-[state=visible]:animate-fade-in"
		>
			<div class="relative top-[70%] size-2.5 rotate-[45deg] rounded-tl-[2px] bg-border"></div>
		</NavigationMenu.Indicator>
	</NavigationMenu.List>
	<div class="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
		<NavigationMenu.Viewport
			bind:ref={viewportRef}
			class="text-popover-foreground relative mt-2.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border bg-background shadow-lg transition-[width,_height] duration-200 data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in sm:w-[var(--bits-navigation-menu-viewport-width)] "
		/>
	</div>
</NavigationMenu.Root>
