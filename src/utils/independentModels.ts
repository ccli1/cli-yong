export const INDEPENDENT_MODELS = [
    'gemini-3.8-flash-tiered',
    'gemini-4-argon',
    'gemini-3.1-flash-lite',
    'claude-opus-5-5-high',
] as const;

export function independentModelKey(model: string): string {
    const key = model.trim().toLowerCase().replace(/^models\//, '').replace(/^\[思考\]/, '');
    if (key === 'gemini-3.8-flash' || key.startsWith('gemini-3.8-flash-')) return 'gemini-3.8-flash-tiered';
    if (key === 'gemini-4-argon' || key.startsWith('gemini-4-argon-')) return 'gemini-4-argon';
    if (key === 'gemini-3.1-flash-lite' || key.startsWith('gemini-3.1-flash-lite-')) return 'gemini-3.1-flash-lite';
    if (key === 'claude-opus-5-5' || key.startsWith('claude-opus-5-5-')) return 'claude-opus-5-5-high';
    return key;
}

export function findIndependentQuota<T extends { name: string }>(models: T[] | undefined, model: string): T | undefined {
    return models?.find(m => m.name.toLowerCase() === model)
        ?? models?.find(m => independentModelKey(m.name) === model);
}
