import { File, Folder, Tree } from "@/components/magicui/file-tree";

const ELEMENTS = [
    {
        id: "1",
        isSelectable: true,
        name: "src",
        children: [
        {
            id: "2",
            isSelectable: true,
            name: "education",
            children: [
            {
                id: "3",
                isSelectable: true,
                name: "formal.tsx",
            },
            {
                id: "4",
                isSelectable: true,
                name: "skills.tsx",
            },
            ],
        },
        {
            id: "5",
            isSelectable: true,
            name: "experience",
            children: [
            {
                id: "6",
                isSelectable: true,
                name: "formal.tsx",
            },
            {
                id: "7",
                isSelectable: true,
                name: "freelance.tsx",
            },
            ],
        },
        {
            id: "8",
            isSelectable: true,
            name: "self-dev",
            children: [
            {
                id: "9",
                isSelectable: true,
                name: "awards.tsx",
            },
            {
                id: "10",
                isSelectable: true,
                name: "journal.tsx",
            },
            ],
        },
        {
            id: "11",
            isSelectable: true,
            name: "community",
            children: [
            {
                id: "12",
                isSelectable: true,
                name: "gdgoc.tsx",
            },
            ],
        },
        {
            id: "14",
            isSelectable: true,
            name: "life",
            children: [
            {
                id: "15",
                isSelectable: true,
                name: "selfie.png",
            },
            ],
        },
        ],
    },
];

export default function FileTree({ setFileViewId }: { setFileViewId: (id: string) => void }) {
  return (
    <div className="relative flex h-auto min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
        <Tree
        className="overflow-hidden rounded-md bg-background p-2 w-full"
        initialSelectedId="3"
        initialExpandedItems={[
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
        ]}
        elements={ELEMENTS}
        >
        <Folder element="src" value="1">
            <Folder value="2" element="education">
            <File value="3" setFV={() => setFileViewId("educationformal.tsx")}><p>formal.tsx</p></File>
            <File value="4" setFV={() => setFileViewId("skills.tsx")}><p>skills.tsx</p></File>
            </Folder>
            <Folder value="5" element="experience">
            <Folder value="6" element="work">
                <File value="7" setFV={() => setFileViewId("workformal.tsx")}><p>formal.tsx</p></File>
                <File value="8" setFV={() => setFileViewId("freelance.tsx")}><p>freelance.tsx</p></File>
            </Folder>
            <Folder value="9" element="self-dev">
                <File value="10" setFV={() => setFileViewId("awards.tsx")}><p>awards.tsx</p></File>
                <File value="11" setFV={() => setFileViewId("journal.tsx")}><p>journal.tsx</p></File>
            </Folder>
            <Folder value="12" element="community">
                <File value="13" setFV={() => setFileViewId("gdgoc.tsx")}><p>gdgoc.tsx</p></File>
            </Folder>
            </Folder>
            <Folder value="16" element="life">
            <File value="17" setFV={() => setFileViewId("selfie.png")}><p>selfie.png</p></File>
            </Folder>
        </Folder>
        </Tree>
    </div>
  );
}