const navigations = [
    {link: "what-is-csrf", title: "CSRF Definition"},
    {link: "protect", title: "Protecting Your App"},
    {link: "usage", title: "Usage Examples"}
];

const latteExample = `<form action="{url('/login')}">
    {csrf('/login')}
</form>`;

const nativeExample = `<form action="<?= url('/login') ?>">
    <?= csrf_field('/login') ?>
</form>`;

export {navigations, latteExample, nativeExample};