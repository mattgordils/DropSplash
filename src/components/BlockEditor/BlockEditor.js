import { useEffect } from 'react';
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/editor.css';
import '@wordpress/block-library/build-style/theme.css';
import { registerCoreBlocks } from '@wordpress/block-library';
import { ShortcutProvider } from '@wordpress/keyboard-shortcuts';
import {
	BlockEditorProvider,
	BlockList,
	BlockTools,
	WritingFlow,
	ObserveTyping,
	BlockEditorKeyboardShortcuts
} from '@wordpress/block-editor'
import { SlotFillProvider, Popover } from '@wordpress/components'
import { useState } from '@wordpress/element'

const BlockEditor = () => {
  const [blocks, updateBlocks] = useState([])
	console.log(blocks)

  return (
    <BlockEditorProvider
			value={ blocks }
			onInput={ ( blocks ) => updateBlocks( blocks ) }
			onChange={ ( blocks ) => updateBlocks( blocks ) }
		>
			<ShortcutProvider>
			<SlotFillProvider>
				<BlockTools>
					<BlockEditorKeyboardShortcuts.Register />
					<WritingFlow>
						<ObserveTyping>
							<BlockList />
						</ObserveTyping>
					</WritingFlow>
				</BlockTools>
				<Popover.Slot />
			</SlotFillProvider>
			</ShortcutProvider>
		</BlockEditorProvider>
  )
}


registerCoreBlocks();
export default BlockEditor