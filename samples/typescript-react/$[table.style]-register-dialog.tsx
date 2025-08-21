import { DialogBackdrop, DialogRoot } from "@/components/ui/dialog";
import { $[Table.style]FrameDialog } from "@/components/$[table.style]/modal/$[table.style]-frame-dialog";
import { $[Table.style]ManagerContext } from "@/contexts/$[table.style]-manager-context";
import { I$[Table.norm] } from "@/store/slices/$[table.style]/types";
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]
import { $[Reference.style]ManagerProvider } from "@/provider/$[reference.style]-manager-provider";
import { $[Reference.style]FrameDialog } from "@/components/$[reference.style]/modal/$[reference.style]-frame-dialog";
$[reference.end]
$[field.end]
import { useContext, useEffect, useState } from "react";

interface $[Table.style]RegisterDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onSave?: ($[table.style]: I$[Table.norm], created?: boolean) => void;
  onExitComplete?: VoidFunction;
}

export function $[Table.style]RegisterDialog({
  open,
  setOpen,
  onSave,
  onExitComplete,
}: $[Table.style]RegisterDialogProps) {
  const { original, changes, setChanges } = useContext($[Table.style]ManagerContext);
  const [discarding, setDiscarding] = useState(false);

  const handleDiscard = () => {
    if (Object.keys(changes).length === 0) {
      setOpen(false);
      return;
    }
    setDiscarding(true);
  };

  useEffect(() => {
    setDiscarding(false);
  }, [original, open]);

  return (
    <DialogRoot
      size="lg"
      open={open}
      closeOnEscape={false}
      onOpenChange={(e) => setOpen(e.open)}
      closeOnInteractOutside={false}
      onEscapeKeyDown={handleDiscard}
      onExitComplete={onExitComplete}
    >
      <DialogBackdrop />
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]
      <$[Reference.style]ManagerProvider lazyLoad>
        {({ isEditing: isEditing$[Reference.style], setEditing: setEditing$[Reference.style] }) => (
$[reference.end]
$[field.end]
          <>
$[field.each(reference)]
$[reference.finds(uuid)]
$[reference.else]
            {isEditing$[Reference.style] && (
              <$[Reference.style]FrameDialog
                onSave={($[reference.norm]) => {
                  setChanges({
                    ...changes,
                    $[reference.norm],
                    $[reference]: $[reference.norm].id,
                  });
                  setEditing$[Reference.style](false);
                }}
                onBack={() => setEditing$[Reference.style](false)}
              />
            )}
$[reference.end]
$[field.end]
            {$[field.each(reference)]$[reference.finds(uuid)]$[reference.else]!isEditing$[Reference.style] &&$[reference.end]$[field.end] (
              <$[Table.style]FrameDialog onSave={onSave} discarding={discarding} />
            )}
          </>
$[field.reverse_each(reference)]
$[reference.finds(uuid)]
$[reference.else]
        )}
      </$[Reference.style]ManagerProvider>
$[reference.end]
$[field.end]
    </DialogRoot>
  );
}
