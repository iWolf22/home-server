export default function NotFound() {
    return (
        <div
            className="flex flex-col justify-center"
            style={{ height: "calc(100vh - 250px)" }}
        >
            <div className="flex justify-center">
                <p className="text-4xl font-extrabold text-stone-600 dark:text-stone-400">
                    404 | <u>Page Not Found</u>
                </p>
            </div>
        </div>
    );
}
