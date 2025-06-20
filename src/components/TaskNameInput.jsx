export default function TaskNameInput({ value, onChange}) {
    return (
        <div>
            <label 
                className="block mb-1 text-sm font-medium" 
                style={{ fontFamily: 'var(--font-serif)' }}>
                Task Name
            </label>
            <input 
                className="w-full px-3 py-2 rounded border focus:ring-1 focus:outline-none text-sm font-bold"
                type="text"
                value={value}
                onChange={onChange}
                placeholder="e.g., make matcha latte"
            />
        </div>
    );
}