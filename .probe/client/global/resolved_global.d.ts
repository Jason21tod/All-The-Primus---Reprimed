import { $JeiRuntime } from "mezz.jei.library.runtime.JeiRuntime"

declare global {
export type ProbeJS$$ResolvedGlobal = {"jeiRuntime": $JeiRuntime};
}
