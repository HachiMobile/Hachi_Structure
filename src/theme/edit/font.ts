const sizes = [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
    40, 48
] as const

//Available global font family
const families = {
    Regular_PlusJakartaSans: 'PlusJakartaSans-Regular',
    Medium_PlusJakartaSans: 'PlusJakartaSans-Medium',
    SemiBold_PlusJakartaSans: 'PlusJakartaSans-SemiBold',
    Bold_PlusJakartaSans: 'PlusJakartaSans-Bold',
} as const

export { sizes, families }
