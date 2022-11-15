import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/editor.css';
import '@wordpress/block-library/build-style/theme.css';
import { registerCoreBlocks } from '@wordpress/block-library';
import {
	BlockEditorProvider,
	BlockList,
	BlockTools,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor'
import { SlotFillProvider, Popover } from '@wordpress/components'
import { useState } from '@wordpress/element'

const BlockEditor = () => {
  const [blocks, updateBlocks] = useState()
  return (
    <BlockEditorProvider
			value={ blocks }
			onInput={ ( blocks ) => console.log( blocks ) }
			onChange={ ( blocks ) => console.log( blocks ) }
		>
			<SlotFillProvider>
				<BlockTools>
					<WritingFlow>
						<ObserveTyping>
							<BlockList />
						</ObserveTyping>
					</WritingFlow>
				</BlockTools>
				<Popover.Slot />
			</SlotFillProvider>
		</BlockEditorProvider>
  )
}


registerCoreBlocks();
export default BlockEditor