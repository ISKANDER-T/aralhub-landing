import { translations, type TranslationsKeys } from "./locales"

const mapLang = <T extends keyof (typeof translations)[TranslationsKeys]>(
	lang: T
) => {
	return Object.entries(translations).reduce(
		(obj, [key, value]) => {
			obj[key as TranslationsKeys] = value[lang]
			return obj
		},
		{} as Record<TranslationsKeys, string>
	)
}

export const RU = {
	translation: Object.keys(translations).reduce(
		(obj, key) => {
			obj[key as TranslationsKeys] = key
			return obj
		},
		{} as Record<TranslationsKeys, string>
	),
}
export const EN = {
	translation: mapLang("EN"),
}
